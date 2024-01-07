"use client";

import Banner from "@/components/Banner/Banner";
import TabTitle from "@/components/Title&Description/TabTitle";
import TabbedProductsContent from "@/components/header&footer/tabbedProductContent/TabbedProductsContent";
import { Button } from "@mui/material";
import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="min-h-[90vh]">
      <div className="bg-[#feddcd84]">

      <div className="max-w-7xl mx-auto md:flex  items-center">
        <div className="space-y-3">
          <h1 className="text-5xl">Get out high quality product now</h1>
          <p>swiper swiperBg swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper</p> 
          <Button color="primary">Explore more</Button>
        </div>
        <Banner />
      </div>

      </div>
      <div className="max-w-7xl mx-auto">
        <TabTitle value={value} />
        <TabbedProductsContent setValue={setValue} value={value} />
      </div>
    </div>
  );
};

export default Home;
