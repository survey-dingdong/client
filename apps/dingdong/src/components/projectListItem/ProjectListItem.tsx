import {
  Box,
  Card,
  CardActionArea,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Icon, Tag } from "dingdong-ds";
import React from "react";

//
//
//

const ProjectListItem: React.FC = () => {
  return (
    <Card elevation={0} sx={{ borderRadius: 4 }}>
      <CardActionArea sx={{ padding: 2.5 }}>
        <Stack gap={2}>
          {/* title */}
          <Stack flexDirection="row" gap={1} alignItems="center">
            <Tag label="대면" size="small" />
            <Typography color="text.secondary" variant="headline1">
              프로젝트 명
            </Typography>
          </Stack>

          {/* description */}
          <Typography variant="label2" color="text.tertiary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet libero sed libero.
          </Typography>

          {/* status */}
          <Stack gap={0.5}>
            <Typography variant="caption2" color="label.normal">
              참여자 수 현황
            </Typography>
            <Stack flexDirection="row" gap={1} alignItems="center">
              <Box width="100%">
                <LinearProgress value={50} variant="determinate" />
              </Box>
              <Typography variant="caption2" color="label.neutral">
                9/30
              </Typography>
            </Stack>

            <Stack flexDirection="row" gap={0.5} alignItems="center">
              <Icon
                icon="calendar"
                size="xSmall"
                sx={{ verticalAlign: "middle" }}
              />
              <Typography
                variant="caption2"
                color="label.normal"
                fontWeight="regular"
              >
                {`참여 기간  |  24년 07월 04일 - 12월 31일`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ProjectListItem;
