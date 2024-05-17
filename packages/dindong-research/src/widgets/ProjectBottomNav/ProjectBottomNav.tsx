import {
  AppBar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  Toolbar,
} from "@mui/material";
import React from "react";
import { drawerWidth } from "src/shared/Nav";

export const bottomNavHeight = "64px";

const ProjectBottomNav = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        top: "auto",
        left: drawerWidth,
        right: 0,
      }}
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between">
            <FormControlLabel
              labelPlacement="start"
              label="서베이 플랫폼에 공개하기"
              slotProps={{
                typography: {
                  variant: "body1",
                },
              }}
              control={<Switch />}
            />
            <Button type="submit">저장</Button>
          </Box>
        </Container>
      </Toolbar>
    </Paper>
  );
};

export default ProjectBottomNav;
