import React from "react";
import "../Styles/home.css";
import BoatBlogs from "./BoatBlogs";
import { CarouselDiv } from "./Carousel";
import NewLaunches from "./NewLaunches";
import PressComponent from "./PressComponent";
import BestSellers from "./BestSellers";
import TrendingWireLess from "./TrendingWireLess";
import TrendingHeadphones from "./TrendingHeadphones";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/AddToCart/actions";
import Gaming from "./Gaming";
import SmartWatches from "./SmartWatches";
import TrendingWired from "./TrendingWired";

const Home = () => {
   const dispatch = useDispatch();

   const handleDispatch = (item) => {
      dispatch(addToCart(item));
   };

   return (
      <div>
         <CarouselDiv />
         <BestSellers handleDispatch={handleDispatch} />
         <SmartWatches handleDispatch={handleDispatch} />
         <NewLaunches />
         <TrendingWireLess handleDispatch={handleDispatch} />
         <TrendingWired handleDispatch={handleDispatch} />
         <TrendingHeadphones handleDispatch={handleDispatch} />
         <Gaming handleDispatch={handleDispatch} />
         <BoatBlogs />
         <PressComponent />
      </div>
   );
};

export default Home;
