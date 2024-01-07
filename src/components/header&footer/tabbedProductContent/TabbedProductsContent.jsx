"use client";
// Import necessary dependencies from Material-UI
import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import useGetProductData from "@/Hooks/useGetProductData";

// Define the theme for the app (assuming you have customized your theme)
const theme = createTheme();

// TabPanel component to display tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Main TabbedProductsContent component
export default function TabbedProductsContent({ value, setValue }) {
  const { products } = useGetProductData(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: { xs: 350, sm: 600 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          // Explicitly show scroll arrows on smaller screens
          sx={{
            [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
              variant: "scrollable",
              "& .MuiTabs-scrollButtons": {
                display: "flex",
              },
            },
          }}>
          <Tab label="Products" />
          <Tab label="Dresses" />
          <Tab label="Books" />
          <Tab label="Earings" />
          <Tab label="Tops" />
          <Tab label="Rings" />
          <Tab label="Bags" />
        </Tabs>
      </Box>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* products looping start here */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="shadow-lg bg-[white] shadow-[#cecdcd35] rounded-lg">
                  <img
                    src="https://img.freepik.com/premium-vector/online-earning-form-online-investment-computer-crypto-trading-affiliate-marketing-ecommerce-sales_566886-6197.jpg?w=2000"
                    alt=""
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between my-2">
                      <h1 className="font-bold">{product.name}</h1>
                      <div><span className="bg-[#7676ff] px-2 text-[white]">+</span> <span className="bg-[gray] px-2 text-[white]">-</span></div>
                      <p>price: 30$</p>
                    </div>
                    <p className="text-[#5f5f5f]">{product.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Childrens dresses
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Books
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Earings
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Womens-tops
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Rings
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Bags
        </TabPanel>
      </SwipeableViews>
    </ThemeProvider>
  );
}
