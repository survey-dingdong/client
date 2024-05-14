"use client";
import React from "react";
import { Drawer } from "@mui/material";
import { headerHeight } from "./Header";

//
//
//

export const drawerWidth = 256;

//
//
//

const Nav = ({ children }: { children: React.ReactNode }) => {
  //
  //
  //

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: drawerWidth,
        display: "block",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          p: 3,
          top: headerHeight + 1,
          height: `calc(100vh - ${headerHeight}px)`,
        },
      }} // 1px for border
      component="nav"
    >
      {children}
    </Drawer>
  );
};

export default Nav;
