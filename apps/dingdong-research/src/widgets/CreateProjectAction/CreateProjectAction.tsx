"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TextField } from "src/shared";
import { useQueryClient } from "@tanstack/react-query";
import { getProjectsQueryKey } from "src/hooks/useProjects";
import { useSnackbar } from "notistack";
import { createProjectWorkspacesWorkspaceIdProjectsPost } from "src/client";
import { PROJECT_TITLE_MAX } from "src/constants/project";

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
  const error = value.length > PROJECT_TITLE_MAX;

  const noValue = !value.length;

  React.useEffect(() => {
    if (open) {
      setValue("");
    }
  }, [open]);

  //
  //
  //

  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogTitle>실험 프로젝트 만들기</DialogTitle>
      <DialogContent>
        <TextField
          required
          fullWidth
          value={value}
          label="프로젝트 명"
          placeholder="프로젝트 명을 입력해주세요"
          sx={{ backgroundClip: "#F5F7FA" }}
          size="medium"
          helperText={`${value.length}/${PROJECT_TITLE_MAX}`}
          helperTextProps={{
            sx: {
              textAlign: "right",
            },
          }}
          error={error}
          onChange={(e) => setValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          취소
        </Button>
        <Tooltip title={noValue ? "필수 항목을 입력해 주세요." : ""}>
          <span>
            <Button
              disabled={error || noValue}
              onClick={() =>
                createProjectWorkspacesWorkspaceIdProjectsPost({
                  workspaceId,
                  projectType: "experiment",
                  requestBody: {
                    title: value,
                  },
                })
                  .then(() => {
                    enqueueSnackbar("프로젝트가 만들어졌습니다.", {
                      variant: "success",
                    });

                    queryClient.invalidateQueries({
                      queryKey: getProjectsQueryKey,
                    });
                    onClose();
                  })
                  .catch(() => {
                    enqueueSnackbar(
                      "에러가 발생했습니다. 새로고침 후 다시 시도해주세요.",
                      {
                        variant: "error",
                      }
                    );
                  })
              }
            >
              만들기
            </Button>
          </span>
        </Tooltip>
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
