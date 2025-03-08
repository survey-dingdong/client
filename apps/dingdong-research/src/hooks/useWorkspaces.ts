import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GetWorkspaceRepsonseDTO } from "@dingdong/api-client";
import { workspaceApi } from "src/client";

type UseProjectReturn = {
  workspaces: GetWorkspaceRepsonseDTO[] | undefined;
  isLoading: boolean;
  isError: any;
};

export const WORKSPACES_QUERY_KEY = "/workspaces";

export function useWorkspaces(): UseProjectReturn {
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
