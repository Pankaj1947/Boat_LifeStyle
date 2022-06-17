import React from "react";
import { AiFillStar } from "react-icons/ai";

const Gaming = ({ handleDispatch }) => {

   let data = [
      {
         id: 5,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_400x.png?v=1643477993",
         productName: "boAt Immortal 700",
         price: 2499,
         strikedPrice: 6990,
         Rating: 4.8,
         Reviews: 386,
      },
      {
         id: 6,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_400x.png?v=1625748159",
         productName: "boAt Immortal 1000D",
         price: 2299,
         strikedPrice: 5990,
         Rating: 4.9,
         Reviews: 12,
      },
      {
         id: 7,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_400x.png?v=1632715015",
         productName: "boAt Immortal 1300",
         price: 2899,
         strikedPrice: 9990,
         Rating: 4.8,
         Reviews: 8,
      },
      {
         id: 8,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_400x.png?v=1643632679",
         productName: "boAt Immortal 400",
         price: 1999,
         strikedPrice: 6999,
         Rating: 4.5,
         Reviews: 2,
      },
   ];


   return (
      <div className="bestSellerDiv">
         <h1 className="headingText">Gaming</h1>
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

export default Gaming;
