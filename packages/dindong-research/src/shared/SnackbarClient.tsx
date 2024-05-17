"use client";
import { styled } from "@mui/material";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import React from "react";

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

const SnackbarClient: React.FC<SnackbarClientProps> = ({ children }) => {
  return (
    <SnackbarProvider
      style={{
        backgroundColor: "#191F28",
        borderRadius: "12px",
        minWidth: 0,
        width: "fit-content",
      }}
      Components={{
        default: StyledMaterialDesignContent,
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
      iconVariant={{
        success: <i className="fa-solid fa-circle-check" />,
        error: <i className="fa-solid fa-circle-exclamation" />,
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarClient;
