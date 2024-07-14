import {
  Card,
  CardContent,
  Typography,
  Stack,
  LinearProgress,
  Box,
  LinearProgressProps,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { GetProjectListResponse } from "src/client";
import { usePath } from "src/hooks/usePath";
import PublicTag from "src/widgets/PublicTag";

//
//
//

interface ProjectCardProps {
  project: GetProjectListResponse;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const informationPath = usePath({
    type: "project",
    slug: "/information",
    projectId: project.id,
  });

  //
  //
  //

  return (
    <Card
      variant="outlined"
      component={Link}
      href={informationPath}
      key={project.id}
      sx={{ borderRadius: 4, textDecoration: "none" }}
    >
      <CardActionArea>
        <Box
          display="flex"
          gap={1}
          padding="24px 24px 0 24px"
          alignItems="center"
        >
          <PublicTag size="small" isPublic={project?.isPublic} />
          <Typography variant="h6" noWrap>
            {project.title}
          </Typography>
        </Box>
        <CardContent sx={{ padding: "16px 24px 24px 24px" }}>
          <Stack gap={2}>
            <Typography
              variant="body2"
              sx={{
                height: 40,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </Typography>

            <Stack>
              <Typography variant="body2" fontWeight={700}>
                참여 현황
              </Typography>
              <LinearProgressWithLabel
                project={project}
                value={
                  project.maxParticipants === 0
                    ? 0
                    : (project.joinedParticipants / project.maxParticipants) *
                      100
                }
              />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function LinearProgressWithLabel({
  project,
  ...props
}: LinearProgressProps & { project: GetProjectListResponse }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Typography variant="caption" fontWeight={600}>
        {project.joinedParticipants}/{project.maxParticipants}
      </Typography>
    </Box>
  );
}
