import { Chip, ChipProps } from "@mui/material";
import React from "react";

const Tag = (props: ChipProps) => {
  return <Chip {...props} sx={{ borderRadius: 1.5, ...props.sx }} />;
};

export default Tag;
