"use client";
import {
  ArrowLeft,
  ForumOutlined,
  PeopleAltOutlined,
  ViewQuiltOutlined,
} from "@mui/icons-material";

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
import { useParams } from "next/navigation";

//
//
//

export const drawerWidth = 256;

//
//
//

const Nav = () => {
  const { projectId } = useParams();
  console.log(projectId);
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
        variant="text"
        startIcon={<ArrowLeft />}
        sx={{ justifyContent: "flex-start" }}
        fullWidth
      >
        프로젝트 홈
      </Button>
      <List
        subheader={
          <ListSubheader component="div" sx={{ position: "static" }}>
            프로젝트 메뉴
          </ListSubheader>
        }
        sx={{ flexGrow: 1 }}
      >
        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={`/project/${projectId}/information`}
          >
            <ListItemIcon>
              <ViewQuiltOutlined />
            </ListItemIcon>
            <ListItemText>프로젝트 정보</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            LinkComponent={Link}
            href={`/project/${projectId}/participants`}
          >
            <ListItemIcon>
              <PeopleAltOutlined />
            </ListItemIcon>
            <ListItemText>참여자</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ForumOutlined />
            </ListItemIcon>
            <ListItemText>채팅</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      {/* add workspace button */}
      <Button color="inherit">프로젝트 삭제</Button>
    </Drawer>
  );
};

export default Nav;
