"use client";
import { Stack } from "@mui/material";
import ProjectList from "src/widgets/ProjectList/ProjectList";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { ContentContainer } from "src/widgets";

//
//
//

export default function Page() {
  return (
    <ContentContainer>
      <Stack height="100%">
        <SurveyListPageHeader />

        <ProjectList />
      </Stack>
    </ContentContainer>
  );
}
