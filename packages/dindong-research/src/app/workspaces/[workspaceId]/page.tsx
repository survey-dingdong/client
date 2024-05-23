"use client";
import { Stack } from "@mui/material";
import { useProjects } from "src/hooks/useProjects";
import ProjectList from "src/widgets/ProjectList/ProjectList";
import { useParams } from "next/navigation";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { SurveyListEmpty } from "src/widgets";

//
//
//

export default function Page() {
  const { workspaceId } = useParams();
  const { projects } = useProjects({
    workspaceId: Number(workspaceId),
  });

  const hasNoProjects = projects?.length === 0;

  const _workspaceId = Number(workspaceId);

  return (
    <Stack height="100%">
      <SurveyListPageHeader />

      <ProjectList projects={projects} workspaceId={_workspaceId} />
      {hasNoProjects ? <SurveyListEmpty workspaceId={_workspaceId} /> : null}
    </Stack>
  );
}
