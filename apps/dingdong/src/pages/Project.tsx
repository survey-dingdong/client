import { Stack, Typography, Link as MuiLink } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { DefaultHeader, ProjectListItem } from "../components";
import ContentLayout from "../components/layout/ContentLayout";

const Project: React.FC = () => {
  const projectCount = 37;

  //
  //
  //

  return (
    <>
      <DefaultHeader title="실험공고" />
      <ContentLayout>
        <Stack gap={2} padding={2}>
          <Typography variant="body1Reading" color="label.strong">
            지금 참여 가능한
            <Typography component="span" color="primary.main">
              {" "}
              {projectCount}
            </Typography>
            개의 공고가 있어요!
          </Typography>

          <MuiLink component={Link} underline="none" to="/project/1">
            <ProjectListItem />
          </MuiLink>
          <ProjectListItem />
          <ProjectListItem />
        </Stack>
      </ContentLayout>
    </>
  );
};

export default Project;
