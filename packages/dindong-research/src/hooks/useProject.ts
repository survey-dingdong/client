import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  GetExperimentProjectResponse,
  ProjectTypeEnum,
} from "generated-client";

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

export function useProject({
  workspaceId,
  projectId,
}: useProjectPrams): UseProjectReturn {
  const { data, isLoading, error } = useQuery({
    queryKey: ["/project", workspaceId, projectId],
    queryFn: () =>
      axios
        .get(`/workspaces/${workspaceId}/projects/${projectId}`, {
          params: { project_type: ProjectTypeEnum.Experiment },
        })
        .then((res) => res.data),
  });

  return {
    project: data,
    isLoading,
    isError: error,
  };
}
