"use client";
import { Container, Stack } from "@mui/material";
import { useProjects } from "src/hooks/useProjects";
import ProjectList from "src/widgets/ProjectList/ProjectList";
import { useParams } from "next/navigation";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { SurveyListEmpty } from "src/widgets";

//
//
//

export default function Page() {
  const params = useParams<{ workspaceId: string }>();
  const _workspaceId = Number(params?.workspaceId);

  const { projects } = useProjects({
    workspaceId: _workspaceId,
  });

  const hasNoProjects = projects?.length === 0;

  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Stack height="100%">
        <SurveyListPageHeader />

        <ProjectList projects={projects} workspaceId={_workspaceId} />
        {hasNoProjects ? <SurveyListEmpty workspaceId={_workspaceId} /> : null}
      </Stack>
    </Container>
  );
}
