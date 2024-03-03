import useSWR from "swr";
import { getFetcher } from "./fetcher";

export type Project = {
  id: number;
  name: string;
};

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
