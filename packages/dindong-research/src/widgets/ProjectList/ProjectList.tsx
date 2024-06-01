import { Box, Stack } from "@mui/material";
import React from "react";
import { TextField, ProjectCard } from "src/shared";

import { CreateProjectAction } from "../CreateProjectAction";
import { GetProjectListResponse } from "generated-client";

interface ProjectListProps {
  projects?: GetProjectListResponse[];
  workspaceId: number;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, workspaceId }) => {
  /**
   *
   */
  const renderListHeader = () => {
    return (
      <Box display="flex" justifyContent="flex-end">
        {/* <TextField
          placeholder="프로젝트 명으로 검색"
          size="small"
          sx={{ backgroundColor: (theme) => theme.palette.background.paper }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        /> */}
        <CreateProjectAction workspaceId={workspaceId} />
      </Box>
    );
  };

  /**
   *
   * @returns
   */
  const renderProjects = () => {
    return (
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={2}
      >
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    );
  };

  //
  //
  //

  if (projects?.length === 0) {
    return null;
  }

  return (
    <Stack sx={{ mt: 3 }} gap={3}>
      {renderListHeader()}
      {renderProjects()}
    </Stack>
  );
};

export default ProjectList;
