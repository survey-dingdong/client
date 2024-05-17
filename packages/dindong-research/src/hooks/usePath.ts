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
  const { workspaceId: workspaceIdFromParam, projectId: projectIdFromParam } =
    useParams();

  const _workspaceId = workspaceId || workspaceIdFromParam;
  const _projectId = projectId || projectIdFromParam;

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
