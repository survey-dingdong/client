"use client";
import { Button, Container, Paper, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { drawerWidth } from "src/shared";

export const bottomNavHeight = "64px";

const ProjectBottomNav = () => {
  const { formState } = useFormContext();

  return (
    <Paper
      sx={{
        bottom: 0,
        top: "auto",
        left: drawerWidth,
        right: 0,
        borderRadius: 0,
      }}
    >
      <Toolbar>
        <Container maxWidth="lg" sx={{ textAlign: "end" }}>
          <Tooltip
            title={!formState.isValid ? "필수 항목을 입력해 주세요." : ""}
          >
            <span>
              <Button type="submit" disabled={!formState.isValid}>
                저장
              </Button>
            </span>
          </Tooltip>
        </Container>
      </Toolbar>
    </Paper>
  );
};

export default ProjectBottomNav;
