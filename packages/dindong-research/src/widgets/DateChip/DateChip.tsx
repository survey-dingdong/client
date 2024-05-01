import Clear from "@mui/icons-material/Clear";
import { Chip, chipClasses, ChipProps } from "@mui/material";
import React from "react";

const DateChip: React.FC<ChipProps> = (props) => {
  return (
    <Chip
      {...props}
      sx={{
        bgcolor: "#3F57FD1F",
        color: "#3F57FD",
        fontWeight: 500,
        paddingRight: "4px",
      }}
      deleteIcon={
        <i
          className="fa-solid fa-xmark"
          style={{ color: "#3F57FD", fontSize: "15px" }}
        />
      }
    />
  );
};

export default DateChip;
