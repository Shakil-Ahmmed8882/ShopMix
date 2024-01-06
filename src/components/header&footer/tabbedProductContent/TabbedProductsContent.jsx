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
export default function TabbedProductsContent() {
  const [value, setValue] = React.useState(0);

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
          Products
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
