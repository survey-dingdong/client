import { GetProjectResponseDTO } from "@dingdong/api-client";
import { useQuery } from "@tanstack/react-query";

import { projectApi } from "src/client";

//
// types
//

type UseProjectReturn = {
  project: GetProjectResponseDTO | undefined;
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

export const GET_PROJECT_QUERY_KEY = "getProjectProjectsProjectIdGet";

//
//
//

export function useProject({
  workspaceId,
  projectId,
}: useProjectPrams): UseProjectReturn {
  const { data, isLoading, error } = useQuery({
    queryKey: [GET_PROJECT_QUERY_KEY, workspaceId, projectId],
    queryFn: () => projectApi.getProjectProjectsProjectIdGet({ projectId }),
  });

  return {
    project: data?.data,
    isLoading,
    isError: error,
  };
}
