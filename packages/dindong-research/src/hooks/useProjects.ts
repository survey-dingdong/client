import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
}: {
  workspaceId: number;
}): UseProjectReturn {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [...getProjectsQueryKey, workspaceId],
    queryFn: () =>
      getProjectListWorkspacesWorkspaceIdProjectsGet({
        workspaceId,
        projectType: "experiment",
      }),

    placeholderData: keepPreviousData,
  });

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
