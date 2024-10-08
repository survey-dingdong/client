import React from "react";

import { ICON_SIZE, ICONS } from "./_constant";
import { SvgIcon, useTheme } from "@mui/material";

//
//
//

export type IconType = keyof typeof ICONS;

export interface IconProps {
  icon: IconType;
  color?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
}

//
//
//

const Icon: React.FC<IconProps> = ({
  color = "primary",
  size = "medium",
  icon,
}) => {
  const theme = useTheme();
  const SVGIcon = ICONS[icon];

  return (
    <SvgIcon
      component={SVGIcon}
      sx={{
        width: ICON_SIZE[size],
        height: ICON_SIZE[size],
        color: theme.palette[color].main,
      }}
    />
  );
};

export default Icon;
