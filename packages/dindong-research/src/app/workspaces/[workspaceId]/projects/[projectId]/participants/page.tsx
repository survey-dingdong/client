"use client";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  GetExperimentParticipantResponse,
  ProjectTypeEnum,
} from "generated-client";
import { useParams } from "next/navigation";
import React from "react";
import { useProject } from "src/hooks/useProject";
import { Empty, PageHeader } from "src/shared";
import { CopyIconButton } from "src/widgets";
import { ParticipantsTable } from "src/widgets/ParticipantsTable";

export default function Page() {
  const { workspaceId, projectId } = useParams();
  const _workspaceId = parseInt(workspaceId as string);
  const _projectId = parseInt(projectId as string);

  const { data: participantsData = [] } = useQuery({
    queryKey: ["participants"],
    queryFn: async () =>
      axios
        .get<GetExperimentParticipantResponse[]>(
          `/workspaces/${workspaceId}/projects/${projectId}/participants`,
          {
            params: {
              projectType: ProjectTypeEnum.Experiment,
            },
          }
        )
        .then((res) => res.data),
  });

  const { project } = useProject({
    workspaceId: _workspaceId,
    projectId: _projectId,
  });

  const noParticipants = participantsData.length === 0;

  //
  //
  //

  return (
    <Stack gap={4} height="100%">
      <PageHeader
        title="참여자 목록"
        actions={
          noParticipants ? null : (
            <Box display="flex" alignItems="center" gap={3}>
              {/* participate code */}
              <Box display="flex" gap={1} alignItems="center">
                <Typography variant="body2">
                  참여 코드: {project?.participantCode}
                </Typography>
                <CopyIconButton content="ZXWE" />
              </Box>
              {/* download report */}
              <Button color="secondary" startIcon={<DownloadRoundedIcon />}>
                리포트 다운로드
              </Button>
            </Box>
          )
        }
      />

      {/*  */}
      {noParticipants ? (
        <Empty
          title="실험 프로젝트에 대한 참여자가 없습니다"
          description={`실험 프로젝트 참여를 예정하거나 완료한 참여자가 있는 경우\n참여자 목록이 여기에 나타납니다.`}
        />
      ) : (
        <ParticipantsTable participants={participantsData} />
      )}
    </Stack>
  );
}
