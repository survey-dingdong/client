import { Stack } from "@mui/material";
import React from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <Stack width="100vw" height="100%">
      <Header />
      {/* children */}
      <Stack flexGrow={1} />
      <BottomNav />
    </Stack>
  );
};

export default Layout;
