import useSWR from "swr";
import { getFetcher } from "./fetcher";
import { Project } from "src/types/project";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type WorkspaceType = {
  id: number;
  title: string;
};

type UseProjectReturn = {
  workspaces: WorkspaceType[] | undefined;
  isLoading: boolean;
  isError: any;
};

export function useWorkspaces(): UseProjectReturn {
  const { data, isError, isLoading } = useQuery<WorkspaceType[]>({
    queryKey: ["workspaces"],
    queryFn: () => axios.get("/workspaces").then((res) => res.data),
  });

  return {
    workspaces: data,
    isLoading,
    isError,
  };
}
