import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetProjectListResponse, ProjectTypeEnum } from "generated-client";
import { workspaceApi } from "src/apis/client";

type UseProjectReturn = {
  projects: GetProjectListResponse[] | undefined;
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
      workspaceApi.getProjectListWorkspacesWorkspaceIdProjectsGet({
        workspaceId,
        projectType: ProjectTypeEnum.Experiment,
      }),

    placeholderData: keepPreviousData,
  });

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
