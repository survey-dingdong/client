"use client";

import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";

import { headerHeight } from "./Header";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

//
//
//

export const drawerWidth = 256;

//
//
//

const Nav = () => {
  const { projectId } = useParams();

  const pathname = usePathname();

  //
  //
  //

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: drawerWidth,
        display: "block",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          p: 3,
          top: headerHeight + 1,
          height: `calc(100vh - ${headerHeight}px)`,
        },
      }} // 1px for border
      component="nav"
    >
      <Button
        component={Link}
        href="/workspaces"
        variant="text"
        startIcon={<i className="fa-solid fa-arrow-left"></i>}
        sx={{ justifyContent: "flex-start" }}
        fullWidth
      >
        프로젝트 홈
      </Button>
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{ position: "static" }}
            style={{ fontWeight: 700 }}
          >
            프로젝트 메뉴
          </ListSubheader>
        }
        sx={{ flexGrow: 1 }}
      >
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={`/project/${projectId}/information`}
            selected={pathname.includes("/information")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-clone"></i>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              프로젝트 정보
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={`/project/${projectId}/participants`}
            selected={pathname.includes("/participants")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-user"></i>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              참여자
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={`/project/${projectId}/chat`}
            selected={pathname.includes("/chat")}
          >
            <ListItemIcon>
              <i className="fa-regular fa-comment-dots" />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
            >
              채팅
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      {/* add workspace button */}
      <Button color="inherit">프로젝트 삭제</Button>
    </Drawer>
  );
};

export default Nav;
