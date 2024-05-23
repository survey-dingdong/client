import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetProjectListResponse, ProjectTypeEnum } from "generated-client";

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
      axios
        .get(`/workspaces/${workspaceId}/projects`, {
          params: { project_type: ProjectTypeEnum.Experiment },
        })
        .then((res) => res.data),
    placeholderData: keepPreviousData,
  });

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
