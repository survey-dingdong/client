"use client";

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
import editIcon from "public/icons/edit.png";
import deleteIcon from "public/icons/trash.png";
import Image from "next/image";
import WorkspaceDeleteDialog from "./WorkspaceDeleteDialog";

const mock = [
  { id: 1, title: "워크스페이스 1" },
  { id: 2, title: "워크스페이스 2" },
];

type DialogType = null | {
  type: "delete" | "rename";
  selected: { id: number; title: string };
};

const WorkspaceNav = () => {
  const [editMode, setEditMode] = React.useState(false);

  const [dialog, setDialog] = React.useState<DialogType>(null);

  const handleDialogClose = () => {
    setDialog(null);
  };

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
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() =>
                          setDialog({
                            type: "delete",
                            selected: workspace,
                          })
                        }
                      >
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
                  <ListItemText>{workspace.title}</ListItemText>
                </>
              ) : (
                <ListItemButton
                  LinkComponent={Link}
                  href="/"
                  sx={{ height: "100%" }}
                >
                  {workspace.title}
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

      {/* Dialogs */}
      <WorkspaceDeleteDialog
        open={dialog?.type === "delete"}
        onClose={handleDialogClose}
        title={dialog?.selected.title}
      />
    </Nav>
  );
};

export default WorkspaceNav;
