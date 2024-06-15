import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { deleteWorkspaceWorkspacesWorkspaceIdDelete } from "src/client";
import { WORKSPACES_QUERY_KEY } from "src/hooks/useWorkspaces";

interface WorkspaceDeleteDialogProps {
  open: boolean;
  id?: number;
  title?: string;
  onClose: () => void;
}

const WorkspaceDeleteDialog: React.FC<WorkspaceDeleteDialogProps> = ({
  open,
  id,
  title,
  onClose,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams<{ workspaceId: string }>();
  const _workspaceId = Number(params?.workspaceId);

  const router = useRouter();
  const queryClient = useQueryClient();

  const isDeleteThisWorkspace = _workspaceId === id;

  const handleDelete = async () => {
    try {
      if (!id) {
        return;
      }
      deleteWorkspaceWorkspacesWorkspaceIdDelete({
        workspaceId: id,
      });

      enqueueSnackbar("워크스페이스가 삭제되었습니다.", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: [WORKSPACES_QUERY_KEY] });

      if (isDeleteThisWorkspace) {
        router.push(`/workspaces`);
      }
      onClose();
    } catch (error) {
      enqueueSnackbar("워크스페이스 삭제에 실패했습니다.", {
        variant: "error",
      });
    }
  };

  if (!open) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>워크스페이스 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <b>{title}</b>이 삭제됩니다. 계속하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>

        {/* TODO: add delete function */}
        <Button color="error" onClick={handleDelete}>
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkspaceDeleteDialog;
