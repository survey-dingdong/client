"use client";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Button, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { getProjectParticipantListProjectsProjectIdParticipantsGet } from "src/client";
import { Empty, PageHeader } from "src/shared";
import { ContentContainer } from "src/widgets";
import { ParticipantsTable } from "src/widgets/ParticipantsTable";

//
//
//

type Params = {
  workspaceId: string;
  projectId: string;
};

//
//
//

export default function Page() {
  const params = useParams<Params>();
  const _projectId = Number(params?.projectId);

  const { data: participantsData = [] } = useQuery({
    queryKey: ["participants"],
    queryFn: async () =>
      getProjectParticipantListProjectsProjectIdParticipantsGet({
        projectId: _projectId,
        projectType: "experiment",
      }),
  });

  const noParticipants = participantsData.length === 0;

  //
  //
  //

  return (
    <ContentContainer>
      <Stack gap={4} height="100%">
        <PageHeader
          title="참여자 목록"
          actions={
            noParticipants ? null : (
              <Button color="secondary" startIcon={<DownloadRoundedIcon />}>
                리포트 다운로드
              </Button>
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
    </ContentContainer>
  );
}
