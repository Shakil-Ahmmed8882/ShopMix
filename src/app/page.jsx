"use client";

import Banner from "@/components/Banner/Banner";
import TabTitle from "@/components/Title&Description/TabTitle";
import TabbedProductsContent from "@/components/header&footer/tabbedProductContent/TabbedProductsContent";
import { Button } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="h-[100vh]">
      <div className="h-[75vh] bg-[#feddcd84] relative">

      <div className="max-w-7xl  mx-auto md:flex w-full  items-center">
        <div className="space-y-3 w-[90%]">
          <h1 className="text-6xl line-heighth1">Get out high quality product now</h1>
          <p className="text-[18px] pb-2">swiper swiperBg swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper</p> 
          <button className="bg-primaryColor text-[white] p-3 px-8  rounded-lg">Explore more</button>
        </div>
        <Banner />

        {/* Scroll down indicator */}
        <div className="h-20 hidden md:flex w-8 border border-[#000] justify-center rounded-full absolute -bottom-9 left-[50%]"> 
        <div className="w-5 h-5  bg-primaryColor rounded-full animate-up-down my-1"></div>
        </div>
      </div>

      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <TabTitle value={value} />
        <TabbedProductsContent setValue={setValue} value={value} />
      </div>
    </div>
  );
};

export default Home;
