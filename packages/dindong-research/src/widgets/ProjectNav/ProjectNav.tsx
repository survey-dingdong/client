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

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Nav from "src/shared/Nav";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { usePath } from "src/hooks/usePath";
import { useWorkspaces } from "src/hooks/useWorkspaces";
//
//
//

export const drawerWidth = 256;

//
//
//

const ProjectNav = () => {
  const { workspaces } = useWorkspaces();

  const informationPath = usePath({ type: "project", slug: "/information" });
  const participantsPath = usePath({ type: "project", slug: "/participants" });
  const chatPath = usePath({ type: "project", slug: "/chat" });

  const pathname = usePathname();

  //
  //
  //

  return (
    <Nav>
      <Button
        component={Link}
        href={workspaces ? `/workspaces/${workspaces[0].id}` : "/"}
        variant="text"
        color="inherit"
        startIcon={<ArrowBackRoundedIcon fontSize="small" />}
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
            href={informationPath}
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
            href={participantsPath}
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
            href={chatPath}
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
    </Nav>
  );
};

export default ProjectNav;
