import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const [password, passwordUpdate] = useState('');
    const [confirmPassword, confirmPasswordUpdate] = useState('');

    const usenavigate = useNavigate();

    const validate = () => {
        let result = true;
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (confirmPassword === '' || confirmPassword === null) {
            result = false;
            toast.warning('Please Confirm Password');
        }
        if (password !== confirmPassword) {
            result = false;
            toast.warning('Password and Confirm Password do not match');
        }
        return result;
    }

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('http://localhost:8000/updatePassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password,
                    confirmPassword
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    usenavigate.push('/user');
                } else {
                    toast.error(data.message);
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    }
    console.log( usenavigate.push('/user'));

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
                <input type="password" placeholder="Enter Password" onChange={e => passwordUpdate(e.target.value)} />
                <input type="password" placeholder="Confirm Password" onChange={e => confirmPasswordUpdate(e.target.value)} />
                <button type="submit">Reset Password</button>
            </form>
            <Link to="/login">Go back to login</Link>
        </div>
    );
};

export default ResetPassword;