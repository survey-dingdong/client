"use client";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useProjects } from "src/hooks/useProjects";
import ProjectList from "src/widgets/ProjectList/ProjectList";
import { useParams } from "next/navigation";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { ContentContainer } from "src/widgets";

//
//
//

export default function Page() {
  const params = useParams<{ workspaceId: string }>();
  const _workspaceId = Number(params?.workspaceId);

  const { projects, isLoading } = useProjects({
    workspaceId: _workspaceId,
  });

  return (
    <ContentContainer>
      <Stack height="100%">
        <SurveyListPageHeader />
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <CircularProgress />
          </Box>
        ) : (
          <ProjectList projects={projects} workspaceId={_workspaceId} />
        )}
      </Stack>
    </ContentContainer>
  );
}
