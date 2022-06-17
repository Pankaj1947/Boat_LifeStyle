import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/AddToCart/actions";

const Otp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleOtp = () => {
      alert("Ordered Successfully");
      navigate("/");
      dispatch(clearCart());
   }

   useEffect(() => {
      alert("Please Enter the OTP")
   }, [])

   return (
      <div className="backgroundColorOtp">
         <div className="checkoutDiv">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Enter OTP</h2>
            </div>
            <input type="text" />
            <button onClick={handleOtp} className="checkoutBtn">
               Submit
            </button>
         </div>
      </div>
   );
};

export default Otp;
