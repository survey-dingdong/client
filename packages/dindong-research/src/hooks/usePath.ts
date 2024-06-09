import { useParams } from "next/navigation";

type PathType = "workspace" | "project";

interface UsePathParams {
  type: PathType;
  workspaceId?: number;
  projectId?: number;
  slug?: string;
}

export const usePath = ({
  type,
  workspaceId,
  projectId,
  slug,
}: UsePathParams) => {
  const params = useParams();

  const _workspaceId = workspaceId || Number(params?.workspaceId);
  const _projectId = projectId || Number(params?.projectId);

  //
  //
  //

  switch (type) {
    case "workspace":
      return `/workspaces/${_workspaceId}${slug}`;

    case "project":
      return `/workspaces/${_workspaceId}/projects/${_projectId}${slug}`;

    default:
      return "/";
  }
};
