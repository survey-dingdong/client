import { Box, InputAdornment, Stack } from "@mui/material";
import React from "react";
import CreateProjectAction from "../CreateProjectAction/CreateProjectAction";
import TextField from "src/shared/TextField";
import { Project } from "src/hooks/useProjects";
import ProjectCard from "src/shared/ProjectCard";
import SearchIcon from "@mui/icons-material/Search";

interface ProjectListProps {
  projects?: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  /**
   *
   */
  const renderListHeader = () => {
    return (
      <Box display="flex" justifyContent="space-between">
        <TextField
          placeholder="프로젝트 명으로 검색"
          size="small"
          sx={{ backgroundColor: (theme) => theme.palette.background.default }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <CreateProjectAction />
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
          <ProjectCard project={project} />
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
