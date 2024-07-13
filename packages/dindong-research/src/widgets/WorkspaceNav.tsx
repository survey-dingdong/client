"use client";

import { Box, Button, List, ListSubheader, Stack } from "@mui/material";
import React from "react";
import { Nav } from "src/shared";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkspaceDeleteDialog from "./WorkspaceDeleteDialog";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { useWorkspaces, WORKSPACES_QUERY_KEY } from "src/hooks/useWorkspaces";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import WorkspaceListItem from "./DndList/WorkspaceListItem";
import { updateWorkspaceWorkspacesWorkspaceIdPatch } from "src/client";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

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
  // [HOOKS]
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  // [STATE]
  const [editMode, setEditMode] = React.useState(false);
  const [dialog, setDialog] = React.useState<DialogType>(null);

  // [QUERY]
  const { workspaces = [] } = useWorkspaces();

  const onlyOneWorkspace = workspaces?.length === 1;
  const fullWorkspaces = workspaces?.length >= 10;

  const { mutate: createWorkspace } = useWorkspaceCreate();

  // [HANDLER]
  const handleDialogClose = () => {
    setDialog(null);
  };

  // [DND]
  const [activeId, setActiveId] = React.useState<null | UniqueIdentifier>();
  const { setNodeRef } = useDroppable({ id: "1" });

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    const activeId = active.id;
    setActiveId(activeId);
  };

  const handleDragCancel = () => setActiveId(null);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    try {
      if (!over) {
        setActiveId(null);
        return;
      }

      if (active.id === over.id) {
        return null;
      }

      updateWorkspaceWorkspacesWorkspaceIdPatch({
        workspaceId: active.id as number,
        requestBody: {
          orderNo: over.data.current?.sortable.index,
        },
      }).then(() => {
        queryClient.invalidateQueries({ queryKey: [WORKSPACES_QUERY_KEY] });
      });

      setActiveId(null);
    } catch (error) {
      enqueueSnackbar("에러가 발생했습니다.", { variant: "error" });
    }
  };

  //
  //
  //

  return (
    <Nav>
      <Stack gap={2}>
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={workspaces} disabled={!editMode}>
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
                      fontWeight: 500,
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
                return (
                  <WorkspaceListItem
                    key={workspace.id}
                    editMode={editMode}
                    workspace={workspace}
                    hideDeleteIcon={onlyOneWorkspace}
                    onDeleteIconClick={() =>
                      setDialog({
                        type: "delete",
                        selected: workspace,
                      })
                    }
                  />
                );
              })}
            </List>
          </SortableContext>
        </DndContext>

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
