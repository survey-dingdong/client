import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      size="small"
      sx={{ color: (theme) => theme.palette.label.normal }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
