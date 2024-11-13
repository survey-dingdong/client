import { Stack } from "@mui/material";
import React from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <Stack>
      <Header />
      <BottomNav />
    </Stack>
  );
};

export default Layout;
