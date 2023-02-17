// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//     const [iduser, setIduser] = useState("");
//     const [email, setEmail] = useState("");
//     const navigate = useNavigate();

//     const handleForgotPassword = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//           try {
//             const response = await fetch("http://localhost:8000/forgotpassword?user", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 iduser,email,
//               }),
//             });
//             const data = await response.json();
//             console.log(data);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//     };

//     const validate = () => {
//         let result = true;
//         if (!email) {
//             result = false;
//             toast.warning("Please Enter Email Address");
//         }
//         return result;
//     };

//     return (
//         <div className="row">
//             <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
//                 <form onSubmit={handleForgotPassword} className="container">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2>Forgot Password</h2>
//                         </div>
//                         <div className="card-body">
//                             <div className="form-group">
//                                 <label>
//                                     Email Address <span className="errmsg">*</span>
//                                 </label>
//                                 <input
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="form-control"
//                                 />
//                             </div>
//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-primary">
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;