"use client";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import logoimage from "src/assets/logo.png";
import Image from "next/image";

//
//
//

export const drawerWidth = 256;

const workspaces = [
  {
    id: 1,
    name: "지역사회 회복력 및 재해 복구의 사회적 자본",
    surveys: [{ id: "111", name: "인식조사" }],
    interviews: [{ id: "121", name: "중원구 거주 청소년 인터뷰" }],
  },
  {
    id: 2,
    name: "사회 정책이 빈곤과 불평등에 미치는 영향",
    surveys: [{ id: "211", name: "30대 설문조사" }],
    interviews: [{ id: "221", name: "정책 관리 보좌관 질적 인터뷰" }],
  },
];

const StyledListButton = styled(ListItemButton)`
  border-radius: 8px;
`;

//
//
//

const Nav = () => {
  /**
   *
   */
  const renderSurveys = (surveys: any[]) => {
    return surveys.map((survey) => (
      <>
        <ListItem key={survey.id}>
          <ListItemText>{survey.name}</ListItemText>
        </ListItem>
        <List disablePadding>
          <StyledListButton sx={{ pl: 4 }}>
            <ListItemText primary={"설문 상세"} />
          </StyledListButton>
          <StyledListButton sx={{ pl: 4 }}>
            <ListItemText primary={"설문 프로젝트 관리"} />
          </StyledListButton>
        </List>
      </>
    ));
  };

  /**
   *
   */
  const renderInterviews = (interviews: any[]) => {
    return interviews.map((interview) => (
      <React.Fragment key={interview.id}>
        <ListItem>
          <ListItemText>{interview.name}</ListItemText>
        </ListItem>
        <List disablePadding>
          <StyledListButton sx={{ pl: 4 }}>
            <ListItemText primary={"실험 상세"} />
          </StyledListButton>
          <StyledListButton sx={{ pl: 4 }}>
            <ListItemText primary={"실험 프로젝트 관리"} />
          </StyledListButton>
        </List>
      </React.Fragment>
    ));
  };

  /**
   *
   */
  const renderWorkspaces = () => {
    return workspaces.map((workspace) => (
      <React.Fragment key={workspace.id}>
        <Link href={`/workspaces/${workspace.id}`}>
          <StyledListButton>
            <ListItemText primary={workspace.name} />
          </StyledListButton>
        </Link>

        <Collapse in>
          {renderSurveys(workspace.surveys)}
          {renderInterviews(workspace.interviews)}
        </Collapse>
      </React.Fragment>
    ));
  };

  //
  //
  //

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{ sx: { p: 3 } }}
      component="nav"
    >
      {/* logo */}
      <Link href="/">
        <Box sx={{ mb: 3, height: 40, position: "relative" }}>
          <Image
            alt="딩동 로고"
            src={logoimage.src}
            title="딩동 홈페이지로 이동"
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </Box>
      </Link>

      <List
        subheader={
          <ListSubheader component="div" sx={{ position: "static" }}>
            나의 워크 스페이스
          </ListSubheader>
        }
      >
        {renderWorkspaces()}
      </List>

      {/* add workspace button */}
      <Button color="secondary" startIcon={<Add />}>
        워크스페이스 추가
      </Button>
    </Drawer>
  );
};

export default Nav;
