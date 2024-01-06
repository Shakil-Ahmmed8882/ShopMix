"use client";

import React from "react";
import {
  IconButton,
  Typography,
  Box,
  Toolbar,
  Button,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { NavItems } from "./Links";

const AppBarComponent = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      component="nav"
      sx={{
        backgroundColor: "white",
        color: "#000",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          ShopMix
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {NavItems.map((item) => (
            <Link key={item.slug} href={item.slug}>
              <Button sx={{ color: "#000" }}>{item.name}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
