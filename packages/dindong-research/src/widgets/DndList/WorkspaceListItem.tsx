"use client";

import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import editIcon from "public/icons/edit.png";
import deleteIcon from "public/icons/trash.png";
import Image from "next/image";

import { WorkspaceType } from "src/hooks/useWorkspaces";
import WorkspaceRenameInput from "../WorkspaceRenameInput";
import { useParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface WorkspaceListItemProps {
  workspace: WorkspaceType;
  editMode?: boolean;
  hideDeleteIcon?: boolean;
  onDeleteIconClick?: () => void;
}

const WorkspaceListItem: React.FC<WorkspaceListItemProps> = ({
  workspace,
  editMode,
  hideDeleteIcon,
  onDeleteIconClick,
}) => {
  const params = useParams<{ workspaceId: string }>();
  const currentWorkspaceId = Number(params?.workspaceId);

  const [editingWorkspace, setEditingWorkspace] =
    React.useState<WorkspaceType | null>(null);

  const isItemEditing = editingWorkspace?.id === workspace.id;
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({ id: workspace.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab",
  };

  //
  //
  //

  return (
    <ListItem
      key={workspace.id}
      // dnd
      {...attributes}
      ref={setNodeRef}
      style={style}
      //
      disablePadding
      sx={{ height: 40 }}
      secondaryAction={
        editMode && !isItemEditing ? (
          <>
            <Tooltip title="이름 변경">
              <IconButton
                size="small"
                onClick={(e) => {
                  console.log("hi");
                  e.preventDefault();
                  e.stopPropagation();

                  setEditingWorkspace(workspace);
                }}
                sx={{ zIndex: 1 }}
              >
                <Image src={editIcon.src} width={16} height={16} alt="edit" />
              </IconButton>
            </Tooltip>
            {hideDeleteIcon ? null : (
              <Tooltip title="삭제">
                <IconButton
                  size="small"
                  disabled={hideDeleteIcon}
                  onClick={onDeleteIconClick}
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
          <ListItemIcon {...listeners}>
            <MenuRoundedIcon fontSize="small" />
          </ListItemIcon>
          {isItemEditing ? (
            <WorkspaceRenameInput
              value={workspace.title}
              workspaceId={workspace.id}
              onStopEditing={() => setEditingWorkspace(null)}
            />
          ) : (
            <ListItemText
              {...listeners}
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
          selected={workspace.id === currentWorkspaceId}
          sx={{ height: "100%" }}
        >
          <ListItemText primaryTypographyProps={{ noWrap: true }}>
            {workspace.title}
          </ListItemText>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default WorkspaceListItem;
