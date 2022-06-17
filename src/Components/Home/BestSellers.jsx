import React from "react";
import { AiFillStar } from "react-icons/ai";

const BestSellers = ({ handleDispatch }) => {

   let data = [
      {
         id:1,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
         productName: "boAt Watch Wave Pro",
         price: 999,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 915,
      },
      {
         id: 2,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
         productName: "boAt Rockerz 330",
         price: 1499,
         strikedPrice: 2990,
         Rating: 4.8,
         Reviews: 258,
      },
      {
         id: 3,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_600x.png?v=1641801662",
         productName: "boAt Rockerz 333",
         price: 1199,
         strikedPrice: 3990,
         Rating: 4.9,
         Reviews: 90,
      },
      {
         id: 4,
         imgURL:
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
         productName: "boAt Watch Xtend",
         price: 3199,
         strikedPrice: 7990,
         Rating: 4.8,
         Reviews: 108,
      },
   ];


   return (
      <div className="bestSellerDiv">
         <h1 className="headingText">Best Sellers</h1>
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
                        <hr className="linedivide"/>
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

export default BestSellers;
