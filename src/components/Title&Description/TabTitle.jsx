"use client";

const TabTitle = ({ value }) => {
  // defining the title based on the tabs index number
  let component = "";
  if (value == 0) {
    component = <h1>Product</h1>;
  } else if (value == 1) {
    component = <h1>Childrens Dresses</h1>;
  } else if (value == 2) {
    component = <h1>Books</h1>;
  } else if (value == 3) {
    component = <h1>Earings</h1>;
  } else if (value == 4) {
    component = <h1>Tops</h1>;
  } else if (value == 5) {
    component = <h1>Rings</h1>;
  } else if (value == 6) {
    component = <h1>Bags</h1>;
  }

  
  // this component now can be used if title need based on tab index
  return <h1 className="text-4xl relative  mb-3 uppercase">{component}</h1>;
};

export default TabTitle;
