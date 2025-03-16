import { Chip, ChipProps, StatusType, useTheme } from "@mui/material";
import React from "react";

export interface TagProps extends Omit<ChipProps, "color"> {
  color?: keyof StatusType;
}

const Tag: React.FC<TagProps> = ({ color = "primary", ...props }) => {
  const theme = useTheme();

  const getColor = () => {
    if (color === "inherit") {
      return {
        bgcolor: theme.palette.background.inherit,
        color: theme.palette.text.primary,
      };
    }

    return {
      bgcolor: theme.palette.status?.[color],
      color: theme.palette[color].main,
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
