import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { WORKSPACES_QUERY_KEY } from "./useWorkspaces";
import { workspaceApi } from "src/client";

//
//
//

export const useWorkspaceCreate = ({
  hideSnackbar,
}: {
  hideSnackbar?: boolean;
} = {}) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const mutation = useMutation({
    mutationFn: (data: { title: string }) =>
      workspaceApi.createWorkspaceWorkspacesPost({
        createWorkspaceRequest: data,
      }),
    onSuccess: () => {
      if (!hideSnackbar) {
        enqueueSnackbar("워크스페이스가 생성되었습니다.", {
          variant: "success",
        });
      }

      queryClient.invalidateQueries({ queryKey: [WORKSPACES_QUERY_KEY] });
    },
  });

  return mutation;
};
