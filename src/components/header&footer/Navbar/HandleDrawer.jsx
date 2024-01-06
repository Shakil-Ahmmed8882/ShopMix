"use client";

import React from "react";
import Link from "next/link";
import { NavItems } from "./Links";
import {
  List,
  ListItem,
  ListItemButton,
  Divider,
  Typography,
  ListItemText,
  Box,
} from "@mui/material";

const HandleDrawer = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {NavItems.map((item) => (
          <ListItem key={item.slug} disablePadding>
            <Link href={item.slug}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HandleDrawer;
