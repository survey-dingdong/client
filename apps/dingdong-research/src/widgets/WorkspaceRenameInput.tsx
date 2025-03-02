import { OutlinedInput } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React from "react";
import { workspaceApi } from "src/client";

import { WORKSPACES_QUERY_KEY } from "src/hooks/useWorkspaces";

interface WorkspaceRenameInputProps {
  value: string;
  workspaceId: number;
  onStopEditing: () => void;
}

const WorkspaceRenameInput: React.FC<WorkspaceRenameInputProps> = ({
  value,
  workspaceId,
  onStopEditing,
}) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState<string>(value);

  const handleRename = async () => {
    try {
      if (!inputValue) {
        onStopEditing();
        return;
      }

      await workspaceApi.updateWorkspaceWorkspacesWorkspaceIdPatch({
        workspaceId,
        updateWorkspaceRequest: {
          title: inputValue,
        },
      });

      await queryClient.invalidateQueries({ queryKey: [WORKSPACES_QUERY_KEY] });

      enqueueSnackbar("워크스페이스 이름이 변경되었습니다.", {
        variant: "success",
      });

      onStopEditing();
    } catch (_) {
      enqueueSnackbar("워크스페이스 이름 변경에 실패했습니다.", {
        variant: "error",
      });
    }
  };

  return (
    <OutlinedInput
      ref={inputRef}
      size="small"
      autoFocus
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleRename}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleRename();
        }
      }}
    />
  );
};

export default WorkspaceRenameInput;
