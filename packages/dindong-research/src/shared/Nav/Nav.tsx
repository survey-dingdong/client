"use client";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  styled,
} from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

//
//
//

export const drawerWidth = 256;

const navList = [
  {
    id: 1,
    name: "지역사회 회복력 및 재해 복구의 사회적 자본",
  },
  {
    id: 2,
    name: "사회 정책이 빈곤과 불평등에 미치는 영향",
  },
];

const StyledListButton = styled(ListItemButton)`
  border-radius: 8px;
`;

//
//
//

const Nav: NextPage = () => {
  /**
   *
   */
  const renderList = (list: any[]) => {
    return list.map((item) => (
      <React.Fragment key={item.id}>
        <StyledListButton>
          <ListItemText primary={item.name} />
        </StyledListButton>

        <Collapse in>
          <List disablePadding>
            <StyledListButton sx={{ pl: 4 }}>
              <ListItemText primary={"설문 상세"} />
            </StyledListButton>
            <StyledListButton sx={{ pl: 4 }}>
              <ListItemText primary={"설문 프로젝트 관리"} />
            </StyledListButton>
          </List>
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
      <Box sx={{ mb: 3 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography variant="h4" fontWeight={800} component="h1">
            LOGO
          </Typography>
          {/* <Box component="img" src="" title="딩동 홈페이지로 이동" /> */}
        </Link>
      </Box>

      <List>
        <ListSubheader sx={{ lineHeight: 2, p: 0 }}>
          나의 워크 스페이스
        </ListSubheader>
        {renderList(navList)}
      </List>
      <Button color="secondary" startIcon={<Add />}>
        워크스페이스 추가
      </Button>
    </Drawer>
  );
};

export default Nav;
