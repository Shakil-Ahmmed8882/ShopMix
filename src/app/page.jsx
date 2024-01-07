"use client";

import useGetProductData from "@/Hooks/useGetProductData";
import TabTitle from "@/components/Title&Description/TabTitle";
import TabbedProductsContent from "@/components/header&footer/tabbedProductContent/TabbedProductsContent";
import React, { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  


  
  return (
    <div className="min-h-[90vh]">
      <TabTitle value={value}/>
      <TabbedProductsContent setValue={setValue} value={value} />
    
    </div>
  );
};

export default Home;
