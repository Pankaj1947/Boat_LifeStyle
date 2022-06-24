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
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_1400x.png?v=1655534702"
               alt="DC"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner-1_1400x.png?v=1655447552"
               alt="watch"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_1400x.jpg?v=1655189587"
               alt="stone135"
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_1400x.jpg?v=1654670966"
               alt="boathead"
            />
         </div>
      </Carousel>
   );
};

export default Carousel;
