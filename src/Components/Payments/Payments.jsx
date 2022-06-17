import React from "react";
import { useNavigate } from "react-router-dom";

const Payments = () => {
   const navigate = useNavigate();
   const otpSend = () => {
      alert("OTP has been send to your registered Mobile.")
      navigate("/otp")
   }
   return (
      <div className="backgroundColorPayment">
         <div className="checkoutDiv">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Payment Details</h2>
            </div>
            <label>Card Holder's Name</label>
            <input type="text" name="" id="" />
            <label>Card Number</label>
            <input type="number" name="" id="" />
            <label>CVV</label>
            <input type="number" name="" id="" />
            <label>Expiry date</label>
            <input type="date" name="" id="" />
            <button className="checkoutBtn" onClick={otpSend}>Submit</button>
         </div>
      </div>
   );
};

export default Payments;
