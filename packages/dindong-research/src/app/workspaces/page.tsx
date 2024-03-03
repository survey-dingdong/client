"use client";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import SurveyListEmpty from "src/widgets/SurveyListEmpty/SurveyListEmpty";
import SurveyListPageHeader from "src/widgets/WorkspacePageHeader/WorkspacePageHeader";
import { useProjects } from "src/hooks/useProjects";
import ProjectList from "src/widgets/ProjectList/ProjectList";

//
//
//

export default function Page() {
  const { projects } = useProjects();
  const hasNoProjects = projects?.length === 0;

  return (
    <Stack height="100%">
      <SurveyListPageHeader />
      <ProjectList projects={projects} />
      {hasNoProjects ? <SurveyListEmpty /> : null}
    </Stack>
  );
}
