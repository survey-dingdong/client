import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetProjectListResponseDTO } from "dingdong-api-client";
import { useRouter } from "next/navigation";
import { workspaceApi } from "src/client";

type UseProjectReturn = {
  projects: GetProjectListResponseDTO[] | undefined;
  isLoading: boolean;
  isError: any;
};

export const getProjectsQueryKey = ["/projects"];

export function useProjects({
  workspaceId,
  filterTitle,
}: {
  workspaceId: number;
  filterTitle?: string;
}): UseProjectReturn {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: [...getProjectsQueryKey, workspaceId, filterTitle],
    queryFn: () =>
      workspaceApi
        .getProjectListWorkspacesWorkspaceIdProjectsGet({
          workspaceId,
          filterTitle,
        })
        .catch(() => {
          router.replace("/workspaces");
        }),
    placeholderData: keepPreviousData,
  });

  return {
    projects: data?.data,
    isLoading,
    isError: error,
  };
}
