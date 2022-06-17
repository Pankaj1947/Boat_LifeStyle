import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselDiv = () => {
   return (
      <Carousel className="carousel"
         autoPlay="true"
         infiniteLoop="true"
         interval="3000"
         showThumbs=""
      >
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_1400x.jpg?v=1655189587"
               alt="stone135"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146"
               alt="cricketer"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_1400x.jpg?v=1654670966"
               alt="watch"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_c1e0eae6-69d2-4898-a82c-9bffc641a1ec_1400x.jpg?v=1654366545"
               alt="octopus"
            />
         </div>
      </Carousel>
   );
};

export default Carousel;
