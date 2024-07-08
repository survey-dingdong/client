import {
  Box,
  CircularProgress,
  InputAdornment,
  outlinedInputClasses,
  Stack,
} from "@mui/material";
import React from "react";
import { Empty, ProjectCard, TextField } from "src/shared";
import SearchIcon from "@mui/icons-material/Search";

import { CreateProjectAction } from "../CreateProjectAction";
import { SurveyListEmpty } from "../SurveyListEmpty";
import { useParams } from "next/navigation";
import { useProjects } from "src/hooks/useProjects";
import { debounce } from "lodash";
import { useDebounce } from "react-use";

const ProjectList = () => {
  const params = useParams<{ workspaceId: string }>();
  const _workspaceId = Number(params?.workspaceId);

  const [search, setSearch] = React.useState("");
  const [debouncedSearch, setDebouncedSearch] = React.useState("");
  console.log(debouncedSearch);

  useDebounce(
    () => {
      setDebouncedSearch(search);
    },
    500,
    [search]
  );

  const { projects, isLoading } = useProjects({
    workspaceId: _workspaceId,
    filterTitle: debouncedSearch,
  });

  const noProjects = projects?.length === 0;

  /**
   *
   */
  const renderListHeader = () => {
    return (
      <Box display="flex" justifyContent="space-between">
        <TextField
          placeholder="프로젝트 명으로 검색"
          size="small"
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <CreateProjectAction workspaceId={_workspaceId} />
      </Box>
    );
  };

  /**
   *
   * @returns
   */
  const renderProjects = () => {
    if (noProjects && debouncedSearch.length > 0) {
      return <Empty title="검색 결과가 없습니다." />;
    }

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

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (noProjects && !debouncedSearch) {
    return <SurveyListEmpty workspaceId={_workspaceId} />;
  }

  return (
    <Stack sx={{ mt: 3, height: "100%" }} gap={3}>
      {renderListHeader()}
      {renderProjects()}
    </Stack>
  );
};

export default ProjectList;
