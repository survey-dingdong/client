import {
  Chip,
  chipClasses,
  ChipProps,
  StatusType,
  useTheme,
} from "@mui/material";
import React from "react";

export interface TagProps extends Omit<ChipProps, "color" | "size"> {
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
        fontSize: 10,
        fontWeight: 600,
        padding: "3px 8px",
        borderRadius: 1.5,
        height: "auto",
        [`& .${chipClasses.label}`]: {
          padding: 0,
        },
        ...getColor(),
        ...props.sx,
      }}
    />
  );
};

export default Tag;
