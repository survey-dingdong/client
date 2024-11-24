import { CheckboxProps } from "@mui/material";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Checkbox as MuiCheckbox } from "@mui/material";

//
//
//

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const getCheckedIcon = () => {
    switch (props.variant) {
      case "round":
        return <CheckCircleRoundedIcon />;

      case "line":
        return <CheckRoundedIcon />;

      case "square":
      default:
        return undefined;
    }
  };

  const getIcon = () => {
    switch (props.variant) {
      case "round":
        return <CheckCircleOutlineRoundedIcon />;

      case "line":
        return <div />; // empty

      case "square":
      default:
        return undefined;
    }
  };

  const checkedIcon = getCheckedIcon();
  const icon = getIcon();

  //
  //
  //

  return <MuiCheckbox icon={icon} checkedIcon={checkedIcon} {...props} />;
};

export default Checkbox;
