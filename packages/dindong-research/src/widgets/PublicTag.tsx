import React from "react";
import Tag from "./Tag";
import { ChipProps } from "@mui/material";

interface PublicTagProps extends ChipProps {
  isPublic: boolean;
}

const PublicTag = ({ isPublic, ...props }: PublicTagProps) => {
  return (
    <Tag
      color={isPublic ? "success" : "default"}
      label={isPublic ? "공개" : "비공개"}
      {...props}
    />
  );
};

export default PublicTag;
