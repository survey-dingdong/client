"use client";
import styled from "@emotion/styled";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import React from "react";

interface SnackbarClientProps {
  children: React.ReactNode;
}

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  // TODO: custom style
  "&.notistack-MuiContent-success": {
    backgroundColor: "#970C0C",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#970C0C",
  },
}));

const SnackbarClient: React.FC<SnackbarClientProps> = ({ children }) => {
  return (
    <SnackbarProvider
      Components={{
        default: StyledMaterialDesignContent,
        success: StyledMaterialDesignContent,
      }}
      autoHideDuration={3000}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarClient;
