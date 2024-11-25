import { Chip, ChipProps, StatusType } from "@mui/material";
import React from "react";
import { dingdongTheme } from "../../theme";

interface TagProps extends Omit<ChipProps, "color"> {
  color: keyof StatusType;
}

const Tag: React.FC<TagProps> = ({ color = "primary", ...props }) => {
  const getColor = () => {
    if (color === "inherit") {
      return {
        bgcolor: dingdongTheme.palette.background.inherit,
        color: dingdongTheme.palette.text.primary,
      };
    }

    return {
      bgcolor: dingdongTheme.palette.status?.[color],
      color: dingdongTheme.palette[color].main,
    };
  };

  //
  //
  //

  return (
    <Chip
      {...props}
      sx={{
        borderRadius: 1.5,
        ...getColor(),
        ...props.sx,
      }}
    />
  );
};

export default Tag;
