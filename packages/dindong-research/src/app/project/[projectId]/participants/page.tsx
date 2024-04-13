import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import PageHeader from "src/shared/PageHeader";
import { ParticipantsTable } from "src/widgets/ParticipantsTable";

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Stack gap={4}>
        <PageHeader
          title="참여자 목록"
          actions={
            <Box display="flex" alignItems="center" gap={3}>
              {/* participate code */}
              <Box display="flex" gap={1} alignItems="center">
                <Typography variant="body2">참여 코드: ZWEX</Typography>
                <IconButton size="small">
                  <LinkRoundedIcon />
                </IconButton>
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
