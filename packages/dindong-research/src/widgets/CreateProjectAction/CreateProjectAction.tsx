"use client";
import React from "react";
import { mutate } from "swr";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TextField from "src/shared/TextField";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { getProjectsQueryKey } from "src/hooks/useProjects";
import { ProjectTypeEnum } from "generated-client";
import { useSnackbar } from "notistack";

//
//
//

interface CreateProjectDialogProps {
  open: boolean;
  workspaceId: number;
  onClose: () => void;
}

const CreateProjectDialog: React.FC<CreateProjectDialogProps> = ({
  open,
  workspaceId,
  onClose,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const [value, setValue] = React.useState("");

  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle>실험 프로젝트 만들기</DialogTitle>
      <DialogContent>
        <TextField
          required
          fullWidth
          label="프로젝트 명"
          placeholder="프로젝트 명을 입력해주세요"
          onChange={(e) => setValue(e.target.value)}
          sx={{ backgroundClip: "#F5F7FA" }}
          size="medium"
        />
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Button
          onClick={() =>
            axios
              .post(
                `/workspaces/${workspaceId}/projects`,
                {
                  title: value,
                },
                {
                  params: {
                    project_type: ProjectTypeEnum.Experiment,
                  },
                }
              )
              .then(() => {
                enqueueSnackbar("프로젝트가 만들어졌습니다.", {
                  variant: "success",
                });

                queryClient.invalidateQueries({
                  queryKey: getProjectsQueryKey,
                });
                onClose();
              })
          }
        >
          만들기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

//
//
//

interface CreateProjectActionProps {
  workspaceId: number;
}

const CreateProjectAction: React.FC<CreateProjectActionProps> = ({
  workspaceId,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => setOpen(true)}
      >
        프로젝트 만들기
      </Button>

      <CreateProjectDialog
        open={open}
        onClose={() => setOpen(false)}
        workspaceId={workspaceId}
      />
    </div>
  );
};

export default CreateProjectAction;
