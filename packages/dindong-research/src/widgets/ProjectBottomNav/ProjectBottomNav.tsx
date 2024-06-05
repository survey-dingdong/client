"use client";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Paper,
  Switch,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { drawerWidth } from "src/shared";

export const bottomNavHeight = "64px";

const ProjectBottomNav = () => {
  const { control } = useFormContext();

  return (
    <Paper
      sx={{
        bottom: 0,
        top: "auto",
        left: drawerWidth,
        right: 0,
      }}
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between">
            <Controller
              control={control}
              name="isPublic"
              render={({ field }) => (
                <FormControlLabel
                  labelPlacement="start"
                  label="서베이 플랫폼에 공개하기"
                  slotProps={{
                    typography: {
                      variant: "body1",
                    },
                  }}
                  {...field}
                  control={<Switch checked={field.value} />}
                />
              )}
            />

            <Button type="submit">저장</Button>
          </Box>
        </Container>
      </Toolbar>
    </Paper>
  );
};

export default ProjectBottomNav;
