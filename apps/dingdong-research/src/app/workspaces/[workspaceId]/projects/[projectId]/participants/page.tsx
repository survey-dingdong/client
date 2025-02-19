"use client";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Button, Stack } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ExperimentAttendanceStatusTypeEnum } from "dingdong-api-client";
import { useParams } from "next/navigation";
import { useSnackbar } from "notistack";
import React from "react";
import { projectApi } from "src/client";

import { Empty, PageHeader } from "src/shared";
import { ContentContainer, Spinner } from "src/widgets";
import { ParticipantsTable } from "src/widgets/ParticipantsTable";

//
//
//

type Params = {
  workspaceId: string;
  projectId: string;
};

const GET_PARTICIPANTS_QUERY_KEY =
  "getProjectParticipantListProjectsProjectIdParticipantsGet";

//
//
//

export default function Page() {
  const params = useParams<Params>();
  const _projectId = Number(params?.projectId);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const { data: participantsData, isLoading } = useQuery({
    queryKey: [GET_PARTICIPANTS_QUERY_KEY, _projectId],
    queryFn: () =>
      projectApi.getProjectParticipantListProjectsProjectIdParticipantsGet({
        projectId: _projectId,
      }),
  });

  const noParticipants = participantsData?.data.length === 0;

  /**
   *
   */
  const handleStatusChange = async ({
    newStatus,
    participantId,
  }: {
    newStatus: ExperimentAttendanceStatusTypeEnum;
    participantId: number;
  }) => {
    try {
      await projectApi.updateProjectParticipantStatusProjectsProjectIdParticipantsParticipantIdPatch(
        {
          projectId: _projectId,
          attendanceStatus: newStatus,
          participantId,
        }
      );

      await queryClient.invalidateQueries({
        queryKey: [GET_PARTICIPANTS_QUERY_KEY],
      });

      await enqueueSnackbar("참여 여부가 변경되었습니다.", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar("참여 여부 변경에 실패했습니다.", { variant: "error" });
    }
  };

  //
  //
  //

  return (
    <ContentContainer>
      <Stack gap={4} sx={{ height: "100%" }}>
        <PageHeader
          title="참여자 목록"
          actions={
            noParticipants ? null : (
              <Button
                disabled={isLoading || noParticipants}
                color="secondary"
                startIcon={<DownloadRoundedIcon />}
              >
                리포트 다운로드
              </Button>
            )
          }
        />

        {isLoading ? (
          <Spinner />
        ) : noParticipants ? (
          <Empty
            title="실험 프로젝트에 대한 참여자가 없습니다"
            description={`실험 프로젝트 참여를 예정하거나 완료한 참여자가 있는 경우\n참여자 목록이 여기에 나타납니다.`}
          />
        ) : (
          <ParticipantsTable
            participants={participantsData?.data}
            onStatusChange={handleStatusChange}
          />
        )}
      </Stack>
    </ContentContainer>
  );
}
