import { useQuery } from "@tanstack/react-query";
import {
  GetExperimentProjectResponse,
  ProjectTypeEnum,
} from "generated-client";
import { projectApi } from "src/apis/client";

//
// types
//

type UseProjectReturn = {
  project: GetExperimentProjectResponse | undefined;
  isLoading: boolean;
  isError: any;
};

interface useProjectPrams {
  projectId: number;
  workspaceId: number;
}

//
//
//

export const GET_PROJECT_QUERY_KEY = "/project";

//
//
//

export function useProject({
  workspaceId,
  projectId,
}: useProjectPrams): UseProjectReturn {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_PROJECT_QUERY_KEY, workspaceId, projectId],
    queryFn: () =>
      projectApi.getProjectProjectsProjectIdGet({
        projectId,
        projectType: ProjectTypeEnum.Experiment,
      }),
  });

  return {
    project: data,
    isLoading,
    isError: error,
  };
}
