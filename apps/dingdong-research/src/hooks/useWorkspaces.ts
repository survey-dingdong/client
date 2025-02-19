import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { workspaceApi } from "src/client";

export type WorkspaceType = {
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
  console.log({ workspaceApi });
  const { data, isError, isLoading } = useQuery({
    queryKey: [WORKSPACES_QUERY_KEY],
    queryFn: () => workspaceApi.getWorkspaceListWorkspacesGet(),
    placeholderData: keepPreviousData,
  });

  return {
    workspaces: data?.data,
    isLoading,
    isError,
  };
}
