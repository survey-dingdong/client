import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  Typography,
  Stack,
  Slider,
  LinearProgress,
  Box,
  LinearProgressProps,
} from "@mui/material";
import React from "react";
import { Project } from "src/hooks/useProjects";

//
//
//

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card variant="outlined" key={project.id} sx={{ p: 1, borderRadius: 4 }}>
      <CardHeader
        title={
          <>
            <Chip label="비공개" sx={{ mr: 1 }} />
            {project.name}
          </>
        }
        titleTypographyProps={{ fontWeight: 800 }}
      />
      <CardContent>
        <Stack gap={2}>
          <Typography sx={{ height: 40 }}>
            프로젝트 설명을 입력해주세요.
          </Typography>

          <Stack>
            <Typography variant="body2" fontWeight={700}>
              참여 현황
            </Typography>
            <LinearProgressWithLabel value={0} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="caption" fontWeight={600}>
          0/30
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectCard;
