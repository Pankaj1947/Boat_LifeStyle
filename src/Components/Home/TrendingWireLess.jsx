import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const TrendingWireLess = ({ handleDispatch }) => {
   const [useClass, setUseClass] = useState("first");

   let data = [
      {
         id: 21,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_400x.png?v=1625045114",
         productName: "boAt Rockerz 235 V2",
         price: 999,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 1007,
      },
      {
         id: 22,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_400x.png?v=1627276367",
         productName: "boAt Rockerz 245 V2",
         price: 1499,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 169,
      },
      {
         id: 23,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_400x.png?v=1625045491",
         productName: "boAt Rockerz 450",
         price: 1499,
         strikedPrice: 3990,
         Rating: 4.8,
         Reviews: 253,
      },
      {
         id: 24,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",
         productName: "boAt Rockerz 550",
         price: 1999,
         strikedPrice: 4999,
         Rating: 4.8,
         Reviews: 308,
      },
   ];

   return (
      <div className="bestSellerDiv">
         <h1 className="headingText">Trending Wireless</h1>
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
               Earbuds
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

export default TrendingWireLess;
