"use client";
import {
  Button,
  CircularProgress,
  Paper,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { drawerWidth } from "src/shared";
import ContentContainer from "../ContentContainer";

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
        <ContentContainer sx={{ textAlign: "end", py: 0 }}>
          <Tooltip
            title={
              !formState.isValid
                ? "필수 항목을 입력해 주세요."
                : !formState.isDirty
                ? "변경 사항이 없습니다."
                : ""
            }
          >
            <span>
              <Button
                type="submit"
                disabled={
                  !formState.isValid ||
                  !formState.isDirty ||
                  formState.isSubmitting
                }
              >
                저장
              </Button>
            </span>
          </Tooltip>
        </ContentContainer>
      </Toolbar>
    </Paper>
  );
};

export default ProjectBottomNav;
