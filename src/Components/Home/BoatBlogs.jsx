import React from "react";

const BoatBlogs = () => {
   return (
      <div className="boatBlogs">
         <div className="blogHeading">
            <h1 className="blogHead">boAt Blogs</h1>
         </div>
         <div className="blogImageDiv flex">
            <div>
               <img
                  className="blogImage"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291"
                  alt=""
               />{" "}
               <p className="blogText">
                  Earphones Buying Guide - Everything You Need To Know
               </p>
            </div>
            <div>
               <img
                  className="blogImage"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307"
                  alt=""
               />{" "}
               <p className="blogText">
                  The Ultimate Smartwatch Guide - Get The World On Your Wrist
               </p>
            </div>
            <div>
               <img
                  className="blogImage"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog_600x.jpg?v=1654260672"
                  alt=""
               />{" "}
               <p className="blogText">
                  It Is Time To Rock The Indian Streets With boAt Headphones.
               </p>
            </div>
         </div>
         <div className="blogHeading">
            <button className="blogBtn">EXPLORE BLOGS</button>
         </div>
      </div>
   );
};

export default BoatBlogs;
