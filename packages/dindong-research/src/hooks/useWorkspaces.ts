import { useQuery } from "@tanstack/react-query";
import { workspaceApi } from "src/apis/client";

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
    queryFn: () => workspaceApi.getWorkspaceListWorkspacesGet(),
  });

  return {
    workspaces: data,
    isLoading,
    isError,
  };
}
