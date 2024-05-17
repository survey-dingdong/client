import useSWR from "swr";
import { getFetcher } from "./fetcher";
import { Project } from "src/types/project";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProjectTypeEnum } from "generated-client";

type UseProjectReturn = {
  projects: Project[] | undefined;
  isLoading: boolean;
  isError: any;
};

export const getProjectsQueryKey = ["/projects"];

export function useProjects({
  workspaceId,
}: {
  workspaceId: number;
}): UseProjectReturn {
  const { data, isLoading, error } = useQuery({
    queryKey: [...getProjectsQueryKey, workspaceId],
    queryFn: () =>
      axios
        .get(`/workspaces/${workspaceId}/projects`, {
          params: { project_type: ProjectTypeEnum.Experiment },
        })
        .then((res) => res.data),
  });

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
