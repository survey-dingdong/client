"use client";
import React from "react";
import Nav from "src/shared/Nav";
import ProfileCard from "./ProfileCard";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";

const MyNav = () => {
  return (
    <Nav>
      <Stack gap={3.5}>
        <ProfileCard />

        <List subheader={<ListSubheader>마이페이지</ListSubheader>}>
          <ListItem disablePadding>
            <ListItemButton sx={{ height: 40 }} selected disableTouchRipple>
              <ListItemIcon
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                <i className="fa-regular fa-user" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{ sx: { color: "primary.main" } }}
              >
                내 계정
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Nav>
  );
};

export default MyNav;
