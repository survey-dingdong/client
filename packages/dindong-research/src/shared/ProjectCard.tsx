import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Link as MuiLink,
  LinearProgress,
  Box,
  LinearProgressProps,
  CardActionArea,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePath } from "src/hooks/usePath";
import { Project } from "src/types/project";
import Tag from "src/widgets/Tag";

//
//
//

interface ProjectCardProps {
  project: Project;
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
    <MuiLink component={Link} href={informationPath} underline="none">
      <Card variant="outlined" key={project.id} sx={{ borderRadius: 4 }}>
        <CardActionArea sx={{ p: 1 }}>
          <CardHeader
            title={
              <>
                <Tag label="비공개" sx={{ mr: 1 }} />
                {project.title}
              </>
            }
            titleTypographyProps={{ fontWeight: 800, noWrap: true }}
          />
          <CardContent>
            <Stack gap={2}>
              <Typography sx={{ height: 40 }}>{project.description}</Typography>

              <Stack>
                <Typography variant="body2" fontWeight={700}>
                  참여 현황
                </Typography>
                <LinearProgressWithLabel value={0} />
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </MuiLink>
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
