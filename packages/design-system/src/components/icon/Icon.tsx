import React from "react";

import { ICON_SIZE, ICONS } from "./_constant";

//
//
//

export type IconType = keyof typeof ICONS;

export interface IconProps {
  icon: IconType;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success"; //TODO: with mui theme
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
  const SVGIcon = ICONS[icon];

  return (
    <SVGIcon
      style={{
        color,
        width: ICON_SIZE[size],
        height: ICON_SIZE[size],
      }}
    />
  );
};

export default Icon;
