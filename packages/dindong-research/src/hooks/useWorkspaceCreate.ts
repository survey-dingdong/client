import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { createWorkspaceWorkspacesPost } from "src/client";

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
      createWorkspaceWorkspacesPost({
        requestBody: data,
      }),
    onSuccess: () => {
      if (!hideSnackbar) {
        enqueueSnackbar("워크스페이스가 생성되었습니다.", {
          variant: "success",
        });
      }

      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      router.push("/workspaces");
    },
  });

  return mutation;
};
