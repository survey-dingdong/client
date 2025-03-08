"use client";

import {
  IconButton,
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

import WorkspaceRenameInput from "../WorkspaceRenameInput";
import { useParams } from "next/navigation";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GetWorkspaceRepsonseDTO } from "@dingdong/api-client";

interface WorkspaceListItemProps {
  workspace: GetWorkspaceRepsonseDTO;
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
    React.useState<GetWorkspaceRepsonseDTO | null>(null);

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

  const [isOverflowed, setIsOverflowed] = React.useState(false);
  const titleRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (titleRef.current) {
      setIsOverflowed(
        titleRef.current.scrollWidth > titleRef.current.clientWidth
      );
    }
  }, []);

  //
  //
  //

  return editMode ? (
    <ListItemButton
      key={workspace.id}
      // dnd
      {...attributes}
      ref={setNodeRef}
      style={style}
      sx={{ height: 40 }}
    >
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
        <>
          <ListItemText
            {...listeners}
            primaryTypographyProps={{ noWrap: true }}
          >
            {workspace.title}
          </ListItemText>
          <>
            <Tooltip title="이름 변경">
              <IconButton
                size="small"
                onClick={() => setEditingWorkspace(workspace)}
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
        </>
      )}
    </ListItemButton>
  ) : (
    <ListItemButton
      LinkComponent={Link}
      href={`/workspaces/${workspace.id}`}
      selected={workspace.id === currentWorkspaceId}
      sx={{ height: 40 }}
    >
      <Tooltip title={isOverflowed ? workspace.title : ""}>
        <ListItemText primaryTypographyProps={{ noWrap: true, ref: titleRef }}>
          {workspace.title}
        </ListItemText>
      </Tooltip>
    </ListItemButton>
  );
};

export default WorkspaceListItem;
