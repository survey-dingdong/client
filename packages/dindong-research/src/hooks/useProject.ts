import useSWR from "swr";
import { getFetcher } from "./fetcher";
import { Project } from "src/types/project";

//
// types
//

type UseProjectReturn = {
  project: Project | undefined;
  isLoading: boolean;
  isError: any;
};

interface useProjectPrams {
  id: number;
}

//
//
//

export function useProject({ id }: useProjectPrams): UseProjectReturn {
  // TODO: add id
  const { data, isLoading, error } = useSWR(`/project`, getFetcher, {
    errorRetryCount: 10,
  });

  return {
    project: data,
    isLoading,
    isError: error,
  };
}
