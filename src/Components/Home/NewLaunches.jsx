import React from "react";

const NewLaunches = () => {
   return (
      <div className="newLaunches">
         <h1 className="headingText">New Launches</h1>
         <div className="newLaunchesDiv flex">
            <div>
               <img
                  className="arrowSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/left-arrow_1.png?v=1642498138"
                  alt=""
               />
            </div>
            <div className="newLaunchesMiddle flex">
               <div className="launchesImgDiv">
                  <img
                     className="launchesImg"
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_dde24c57-aa19-4a19-ab08-64fbd375ef2e.jpg?v=1653469965"
                     alt=""
                  />
               </div>
               <div className="launchesDataDiv">
                  <p className="text1">Wireless Earbuds</p>
                  <p className="titleText">boAt Airdops 175</p>
                  <p className="text3">Special launch price</p>
                  <p className="rupeeText">Rs. 1699</p>
                  <div className="flex descriptionDiv">
                     <p className="text5">DESCRIPTION</p>
                     <p className="text6">FEATURES</p>
                  </div>
                  <div className="para">
                     <p className="textPara">
                        Experience calling like never before with Airdopes 175 that sends across
                        your boice without ambient disturbance via quad mics with ENx™
                        Technology. Immerse in the sound of 10mm drivers for 35 I {" "}
                        <span className="redText">...Read More</span>
                     </p>
                  </div>
                  <div className="colors flex">
                     <div className="colorRing">
                        <div className="color1"></div>
                     </div>
                     <div className="color2"></div>
                     <div className="color3"></div>
                     <div className="color4"></div>
                  </div>
                  <div className="launchesBtnDiv flex">
                     <button className="exploreBtn">EXPLORE NOW</button>
                     <button className="addToCartBtn">ADD TO CART</button>
                  </div>
               </div>
            </div>
            <div>
               <img
                  className="arrowSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/right-arrow_1.png?v=1642498059"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};

export default NewLaunches;
