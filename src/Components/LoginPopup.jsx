import React from "react";

import { ImCross } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

const LoginPopup = ({ setLogin, login }) => {
   const navigate=useNavigate();
   var credData = JSON.parse(localStorage.getItem("Creds")) || []

   const toggleStatus = () => {
      setLogin(!login)
      if (credData.first_name !== undefined) {
         localStorage.removeItem("Creds")
         setTimeout(() => {
            navigate("/")
         }, 3000);
      }
   }

   return (
      <div className="loginPopup">
         <div className="flex popupUpperDiv">
            <p className="popupText">{credData.first_name ? `Hi ${credData.first_name}!` : "Hi boAthead!"}</p>
            <ImCross onClick={() => setLogin(!login)} size={13} />
         </div>
         <Link to={"/login"}>
            <button onClick={toggleStatus} className="popUpBtn">
               {credData.first_name === undefined ? "Login" : "Logout"}
            </button>
         </Link>
      </div>
   );
};

export default LoginPopup;
