import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import PageHeader from "src/shared/PageHeader";
import { CopyIconButton } from "src/widgets";
import { ParticipantsTable } from "src/widgets/ParticipantsTable";

export default function Page() {
  //
  //
  //

  return (
    <Container maxWidth="lg">
      <Stack gap={4}>
        <PageHeader
          title="참여자 목록"
          actions={
            <Box display="flex" alignItems="center" gap={3}>
              {/* participate code */}
              <Box display="flex" gap={1} alignItems="center">
                <Typography variant="body2">참여 코드: ZWEX</Typography>
                <CopyIconButton content="ZXWE" />
              </Box>
              {/* download report */}
              <Button color="secondary" startIcon={<DownloadRoundedIcon />}>
                리포트 다운로드
              </Button>
            </Box>
          }
        />

        {/*  */}
        <ParticipantsTable />
      </Stack>
    </Container>
  );
}
