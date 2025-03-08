"use client";

import { Button, List, ListSubheader, Stack } from "@mui/material";
import React from "react";
import { Nav } from "src/shared";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import WorkspaceDeleteDialog from "./WorkspaceDeleteDialog";
import { useWorkspaceCreate } from "src/hooks/useWorkspaceCreate";
import { useWorkspaces, WORKSPACES_QUERY_KEY } from "src/hooks/useWorkspaces";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import WorkspaceListItem from "./DndList/WorkspaceListItem";

import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import editIcon from "public/icons/edit_with_square_primary.png";
import Image from "next/image";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { GetWorkspaceRepsonseDTO } from "@dingdong/api-client";
import { workspaceApi } from "src/client";

//
//
//

type DialogType = null | {
  type: "delete" | "rename";
  selected: { id: number; title: string };
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
  const [clientWorkspaces, setClientWorkspaces] = React.useState<
    GetWorkspaceRepsonseDTO[]
  >([]);

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
      const activeIndex = active.data.current?.sortable.index;
      const overIndex = over.data.current?.sortable.index;

      setClientWorkspaces(arrayMove(clientWorkspaces, activeIndex, overIndex));

      workspaceApi
        .updateWorkspaceWorkspacesWorkspaceIdPatch({
          workspaceId: active.id as number,
          updateWorkspaceRequest: {
            orderNo: overIndex + 1, // order starts from 1
          },
        })
        .then(() => {
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
  React.useEffect(() => {
    setClientWorkspaces(workspaces);
  }, [workspaces]);

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
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => setEditMode(!editMode)}
                    startIcon={
                      editMode ? (
                        <CheckCircleOutlineRoundedIcon
                          sx={{ width: 14, height: 14 }}
                        />
                      ) : (
                        <Image
                          src={editIcon.src}
                          width={12}
                          height={12}
                          alt=""
                        />
                      )
                    }
                  >
                    {editMode ? "완료" : "관리"}
                  </Button>
                </ListSubheader>
              }
            >
              {clientWorkspaces?.map((workspace) => {
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
