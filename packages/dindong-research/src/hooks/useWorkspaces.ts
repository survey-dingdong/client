import useSWR from "swr";
import { getFetcher } from "./fetcher";
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

export const WORKSPACES_QUERY_KEY = "/workspaces";

export function useWorkspaces(): UseProjectReturn {
  const { data, isError, isLoading } = useQuery<WorkspaceType[]>({
    queryKey: [WORKSPACES_QUERY_KEY],
    queryFn: () => axios.get("/workspaces").then((res) => res.data),
  });

  return {
    workspaces: data,
    isLoading,
    isError,
  };
}
