import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { Stack, useTheme } from "@mui/material";
import { getAppBarStyle } from "../../constant/app-bar/appbar";
import ProjectCard from "./ProjectCard";

const ProjectList: ActivityComponentType = () => {
  const theme = useTheme();

  //
  //
  //

  return (
    <AppScreen
      appBar={{
        title: "실험 공고",
        textColor: theme.palette.text.primary,
        ...getAppBarStyle(theme),
      }}
      backgroundColor={theme.palette.background.default}
    >
      <Stack gap={2} padding={2}>
        <ProjectCard />
        <ProjectCard />
      </Stack>
    </AppScreen>
  );
};

export default ProjectList;
