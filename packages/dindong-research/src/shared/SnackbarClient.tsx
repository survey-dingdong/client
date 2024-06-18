"use client";
import { styled } from "@mui/material";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

interface SnackbarClientProps {
  children: React.ReactNode;
}

const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    "&.notistack-MuiContent": {
      minWidth: 0,
      i: {
        fontSize: "large",
        marginRight: "14px",
      },
    },
    "&.notistack-MuiContent-error": {
      i: {
        color: theme.palette.error.main,
      },
    },
    "&.notistack-MuiContent-success": {
      i: {
        color: theme.palette.success.main,
      },
    },
  })
);

export const SnackbarClient: React.FC<SnackbarClientProps> = ({ children }) => {
  return (
    <SnackbarProvider
      style={{
        backgroundColor: "#191F28",
        borderRadius: "12px",
      }}
      Components={{
        default: StyledMaterialDesignContent,
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
      iconVariant={{
        success: (
          <CheckCircleRoundedIcon
            color="success"
            fontSize="small"
            sx={{ mr: 1.5 }}
          />
        ),
        error: (
          <ErrorRoundedIcon color="error" fontSize="small" sx={{ mr: 1.5 }} />
        ),
      }}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};
