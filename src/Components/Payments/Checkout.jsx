import React from "react";
import "../Styles/checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
   return (
      <div className="backgroundColor">
         <div className="checkoutDiv">
            <div className="checkoutHeadDiv">
               <h2 className="checkoutHead">Delivery Address</h2>
            </div>
            <label>First Name</label>
            <input type="text" />

            <label>Last Name</label>
            <input type="text" />

            <label>Address</label>
            <input type="text" />

            <label>City</label>
            <input type="text" />

            <label>State</label>
            <input type="text" />

            <label>Pincode</label>
            <input type="text" />
            <Link to={"/payments"}>
               <button className="checkoutBtn">Submit</button>
            </Link>
         </div>
      </div>
   );
};

export default Checkout;
