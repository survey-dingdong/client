import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import {
  getProjectListWorkspacesWorkspaceIdProjectsGet,
  GetProjectListWorkspacesWorkspaceIdProjectsGetResponse,
} from "src/client";

type UseProjectReturn = {
  projects: GetProjectListWorkspacesWorkspaceIdProjectsGetResponse | undefined;
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

  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [...getProjectsQueryKey, workspaceId, filterTitle],
    queryFn: () =>
      getProjectListWorkspacesWorkspaceIdProjectsGet({
        workspaceId,
        projectType: "experiment",
        filterTitle,
      }).catch(() => {
        router.replace("/workspaces");
      }),
    placeholderData: keepPreviousData,
  });

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
