import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  LinearProgress,
  Box,
  LinearProgressProps,
  CardActionArea,
  cardHeaderClasses,
} from "@mui/material";
import { GetProjectListResponse } from "generated-client";
import Link from "next/link";
import React from "react";
import { usePath } from "src/hooks/usePath";
import Tag from "src/widgets/Tag";

//
//
//

interface ProjectCardProps {
  project: GetProjectListResponse;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
      <CardActionArea sx={{ p: 1 }}>
        <CardHeader
          title={
            <>
              <Tag label="비공개" sx={{ mr: 1 }} />
              {project.title}
            </>
          }
          titleTypographyProps={{ fontWeight: 800, noWrap: true }}
          sx={{ [`& .${cardHeaderClasses.content}`]: { width: "100%" }, pb: 0 }}
        />
        <CardContent>
          <Stack gap={2}>
            <Typography
              sx={{
                height: 46,
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
                  (project.joinedParticipants / project.maxParticipants) * 100
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
  console.log(project.joinedParticipants);
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="caption" fontWeight={600}>
          {project.joinedParticipants}/{project.maxParticipants}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard;
