import useSWR from "swr";
import { getFetcher } from "./fetcher";
import { Project } from "src/types/project";

type UseProjectReturn = {
  projects: Project[] | undefined;
  isLoading: boolean;
  isError: any;
};

export function useProjects(): UseProjectReturn {
  const { data, isLoading, error } = useSWR("/projects", getFetcher);

  return {
    projects: data,
    isLoading,
    isError: error,
  };
}
