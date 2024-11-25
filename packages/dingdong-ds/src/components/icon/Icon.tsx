import React from "react";

import { ICON_SIZE, ICONS } from "./_constant";
import { Box, SvgIcon, SvgIconProps } from "@mui/material";

//
//
//

export type IconType = keyof typeof ICONS;

export interface IconProps extends SvgIconProps {
  icon: IconType;
  color?: SvgIconProps["color"];
  size?: keyof typeof ICON_SIZE;
}

//
//
//

const Icon: React.FC<IconProps> = ({
  color = "primary",
  size = "medium",
  icon,
  ...props
}) => {
  const SVGIcon = ICONS[icon];

  //
  //
  //

  return (
    <Box sx={{ width: ICON_SIZE[size], height: ICON_SIZE[size] }}>
      <SvgIcon
        {...props}
        component={props.component || SVGIcon}
        color={color}
        sx={{
          width: ICON_SIZE[size],
          height: ICON_SIZE[size],
          ...props.sx,
        }}
      />
    </Box>
  );
};

export default Icon;
