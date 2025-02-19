import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { workspaceApi } from "src/client";
import { WORKSPACES_QUERY_KEY } from "./useWorkspaces";

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
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: { title: string }) =>
      workspaceApi.createWorkspaceWorkspacesPost({
        createWorkspaceRequest: {
          title: data.title,
        },
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
