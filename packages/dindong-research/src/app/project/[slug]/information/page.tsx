import { Chip, Container, FormLabel, Stack } from "@mui/material";
import CardWithTitle from "src/shared/CardWithTitle";
import PageHeader from "src/shared/PageHeader";
import TextField from "src/shared/TextField";

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Stack gap={4}>
        <PageHeader
          title={
            <>
              <Chip label="비공개" sx={{ mr: 1.5 }} />
              엘리스 앱 사용성 평가 실험
            </>
          }
        />
        {/*  */}
        <CardWithTitle title="기본 정보">
          <TextField label="프로젝트 명" required fullWidth />
          <TextField
            label="프로젝트 설명"
            placeholder="프로젝트 설명을 입력해주세요."
            rows={3}
            multiline
            required
            fullWidth
          />
        </CardWithTitle>

        {/*  */}
        <CardWithTitle title="일시 및 인원">
          <FormLabel>예약 가능 날짜</FormLabel>
          <TextField type="date" required />
        </CardWithTitle>
      </Stack>
    </Container>
  );
}
