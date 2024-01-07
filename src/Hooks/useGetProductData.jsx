"use client";

import { useEffect, useState } from "react";

const useGetProductData = ( category ) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);


  

  return {products}
};



export default useGetProductData;
