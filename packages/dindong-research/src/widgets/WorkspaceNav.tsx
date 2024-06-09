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
import { Nav } from "src/shared";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import editIcon from "public/icons/edit.png";
import deleteIcon from "public/icons/trash.png";
import Image from "next/image";
import WorkspaceDeleteDialog from "./WorkspaceDeleteDialog";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { useParams } from "next/navigation";
import WorkspaceRenameInput from "./WorkspaceRenameInput";
import { useWorkspaces } from "src/hooks/useWorkspaces";

//
//
//

type DialogType = null | {
  type: "delete" | "rename";
  selected: { id: number; title: string };
};

type WorkspaceType = {
  id: number;
  title: string;
};

//
//
//

const WorkspaceNav = () => {
  const params = useParams<{ workspaceId: string }>();
  const _workspaceId = Number(params?.workspaceId);

  // [STATE]
  const [editMode, setEditMode] = React.useState(false);
  const [dialog, setDialog] = React.useState<DialogType>(null);
  const [editingWorkspace, setEditingWorkspace] =
    React.useState<WorkspaceType | null>(null);

  // [QUERY]
  const { workspaces = [] } = useWorkspaces();

  const onlyOneWorkspace = workspaces?.length === 1;
  const fullWorkspaces = workspaces?.length >= 10;

  const { mutate: createWorkspace } = useWorkspaceCreate();

  // [HANDLER]
  const handleDialogClose = () => {
    setDialog(null);
  };

  //
  //
  //

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
          {workspaces?.map((workspace) => {
            const isEditing = editingWorkspace?.id === workspace.id;

            return (
              <ListItem
                key={workspace.id}
                disablePadding
                sx={{ height: 40 }}
                secondaryAction={
                  editMode && !isEditing ? (
                    <>
                      <Tooltip title="이름 변경">
                        <IconButton
                          size="small"
                          onClick={() => setEditingWorkspace(workspace)}
                        >
                          <Image
                            src={editIcon.src}
                            width={16}
                            height={16}
                            alt="edit"
                          />
                        </IconButton>
                      </Tooltip>
                      {onlyOneWorkspace ? null : (
                        <Tooltip title="삭제">
                          <IconButton
                            size="small"
                            disabled={onlyOneWorkspace}
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
                      )}
                    </>
                  ) : null
                }
              >
                {editMode ? (
                  <>
                    <ListItemIcon>
                      <MenuRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    {isEditing ? (
                      <WorkspaceRenameInput
                        value={workspace.title}
                        workspaceId={workspace.id}
                        onStopEditing={() => setEditingWorkspace(null)}
                      />
                    ) : (
                      <ListItemText
                        primaryTypographyProps={{ noWrap: true, pr: 8 }}
                      >
                        {workspace.title}
                      </ListItemText>
                    )}
                  </>
                ) : (
                  <ListItemButton
                    LinkComponent={Link}
                    href={`/workspaces/${workspace.id}`}
                    selected={workspace.id === _workspaceId}
                    sx={{ height: "100%" }}
                  >
                    <ListItemText primaryTypographyProps={{ noWrap: true }}>
                      {workspace.title}
                    </ListItemText>
                  </ListItemButton>
                )}
              </ListItem>
            );
          })}
        </List>

        {editMode || fullWorkspaces ? null : (
          <Button
            startIcon={<AddCircleOutlineRoundedIcon />}
            color="inherit"
            onClick={() => createWorkspace({ title: "내 워크스페이스" })}
          >
            워크스페이스 추가
          </Button>
        )}
      </Stack>

      {/* Dialogs */}
      <WorkspaceDeleteDialog
        open={dialog?.type === "delete"}
        onClose={handleDialogClose}
        id={dialog?.selected.id}
        title={dialog?.selected.title}
      />
    </Nav>
  );
};

export default WorkspaceNav;
