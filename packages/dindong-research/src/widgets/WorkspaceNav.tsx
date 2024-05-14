import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Nav from "src/shared/Nav";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import editIcon from "public/edit.png";
import deleteIcon from "public/trash.png";
import Image from "next/image";

const mock = [
  { id: 1, name: "워크스페이스 1" },
  { id: 2, name: "워크스페이스 2" },
];

const WorkspaceNav = () => {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <Nav>
      <Stack gap={2}>
        <List
          disablePadding
          subheader={
            <ListSubheader
              disableGutters
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              나의 워크스페이스
              <Box
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  cursor: "pointer",
                  pr: 1,
                }}
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? (
                  <>
                    <i className="fa-regular fa-circle-check" />
                    완료
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-pen-to-square" />
                    관리
                  </>
                )}
              </Box>
            </ListSubheader>
          }
        >
          {mock.map((workspace) => (
            <ListItem
              key={workspace.id}
              disablePadding
              sx={{ height: 40 }}
              secondaryAction={
                editMode ? (
                  <>
                    <Tooltip title="이름 변경">
                      <IconButton size="small">
                        <Image
                          src={editIcon.src}
                          width={16}
                          height={16}
                          alt="edit"
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="삭제">
                      <IconButton size="small" color="error">
                        <Image
                          src={deleteIcon.src}
                          width={16}
                          height={16}
                          alt="delete"
                        />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : null
              }
            >
              {editMode ? (
                <>
                  <ListItemIcon>
                    <MenuRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{workspace.name}</ListItemText>
                </>
              ) : (
                <ListItemButton
                  LinkComponent={Link}
                  href="/"
                  sx={{ height: "100%" }}
                >
                  {workspace.name}
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>

        {editMode ? null : (
          <Button startIcon={<AddCircleOutlineRoundedIcon />} color="inherit">
            워크스페이스 추가
          </Button>
        )}
      </Stack>
    </Nav>
  );
};

export default WorkspaceNav;
