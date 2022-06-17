import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingHeadphones = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");

   let data = [
      {
         id: 13,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_400x.png?v=1639153081",
         productName: "boAt Rockerz 333 Pro",
         price: 1699,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 78,
      },
      {
         id: 14,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_400x.png?v=1625045854",
         productName: "boAt Rockerz 245 V2",
         price: 1399,
         strikedPrice: 3499,
         Rating: 4.8,
         Reviews: 368,
      },
      {
         id: 15,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-blue_f69b43bd-1bf3-41f0-a199-837a1eebb711_400x.png?v=1614462143",
         productName: "TRebel Rockerz 235",
         price: 1199,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 14,
      },
      {
         id: 16,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_400x.png?v=1641801662",
         productName: "boAt Rockerz 333",
         price: 1199,
         strikedPrice: 3990,
         Rating: 4.9,
         Reviews: 92,
      },
   ];

   return (
      <div className="bestSellerDiv">
         <h1 className="headingText">Trending Headphones</h1>
         <div className="textDiv flex">
            <p
               onClick={() => setUseClass("first")}
               className={useClass === "first" ? "red" : "simple"}
            >
               Wireless
            </p>
            <p
               onClick={() => setUseClass("second")}
               className={useClass === "second" ? "red" : "simple"}
            >
               ANC
            </p>
            <p
               onClick={() => setUseClass("third")}
               className={useClass === "third" ? "red" : "simple"}
            >
               Wired
            </p>
         </div>
         <div className="cardsDiv flex">
            {data.map((e) => {
               return (
                  <div key={e.id} className="card">
                     <div className="imageDiv">
                        <img src={e.imgURL} alt="" />
                     </div>
                     <div className="dataDiv">
                        <p className="title">{e.productName}</p>
                        <p className="reviewsDiv">
                           <AiFillStar color="red" />
                           {e.Rating} ({e.Reviews} reviews)
                        </p>
                        <hr className="linedivide" />
                        <div className="priceDiv flex">
                           <div className="flex">
                              <p className="price">₹ {e.price}</p>
                              <p className="strPrice">₹ {e.strikedPrice}</p>
                           </div>
                        </div>
                        <div className="savings">
                           {`You Save: ₹${e.strikedPrice - e.price} (${((e.strikedPrice - e.price) * 100 / e.strikedPrice).toFixed(0)}%)`}
                        </div>
                        <div>
                           <button
                              onClick={() => handleDispatch(e)}
                              className="cardBtn"
                           >
                              ADD TO CART
                           </button>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default TrendingHeadphones;
