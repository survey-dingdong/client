import { Stack, Typography } from "@mui/material";
import React from "react";
import { ProjectListItem } from "../components/projectListItem";
import { Link } from "react-router";

const Project: React.FC = () => {
  const projectCount = 37;

  //
  //
  //

  return (
    <Stack gap={2} padding={2}>
      <Typography variant="body1Reading" color="label.strong">
        지금 참여 가능한
        <Typography component="span" color="primary.main">
          {" "}
          {projectCount}
        </Typography>
        개의 공고가 있어요!
      </Typography>

      <Link to="/project/1">
        <ProjectListItem />
      </Link>
      <ProjectListItem />
      <ProjectListItem />
    </Stack>
  );
};

export default Project;
