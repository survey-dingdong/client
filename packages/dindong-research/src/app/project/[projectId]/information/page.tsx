import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  FormControlLabel,
  InputAdornment,
  Stack,
} from "@mui/material";
import CardWithTitle from "src/shared/CardWithTitle";
import FormLabelWithDescription from "src/shared/FormLabelWithDescription";
import PageHeader from "src/shared/PageHeader";
import TextField from "src/shared/TextField";
import InterviewSessionList from "src/widgets/InterviewSessionList/InterviewSessionList";
import { ProjectBottomNav } from "src/widgets/ProjectBottomNav";
import { bottomNavHeight } from "src/widgets/ProjectBottomNav/ProjectBottomNav";

export default function Page() {
  return (
    <Stack width="100%" sx={{ position: "relative", pb: bottomNavHeight }}>
      <Container maxWidth="lg" sx={{ pt: 7, pb: 15 }}>
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
            {/* 예약 가능 날짜 */}
            <Stack gap={1}>
              <FormLabelWithDescription
                label="예약 가능 날짜"
                description="참여자가 실험에 예약할 수 있는 날짜를 지정합니다."
                labelProps={{ required: true }}
              />
              <Stack>
                {/* Date range picker */}
                <Stack
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  divider={<span>~</span>}
                  gap={2}
                >
                  <TextField type="date" required fullWidth />
                  <TextField type="date" required fullWidth />
                </Stack>

                <FormControlLabel
                  label="제외할 날짜 설정"
                  control={<Checkbox />}
                />
              </Stack>
            </Stack>

            {/* 실험 시작/종료 시간 */}
            <Stack gap={1}>
              <Box display="flex" justifyContent="space-between">
                <FormLabelWithDescription
                  label="실험 시작/종료 시간"
                  description={`예약 가능한 실험 시작 및 종료 시간을 설정합니다. 입력된 시간은 여러 개의 실험 세션으로 지정되며, 일 단위로 관리됩니다.\n참여자는 예약 가능 날짜 범위 내에서 참여 가능한 시간대를 선택하여 예약 가능합니다.`}
                  labelProps={{ required: true }}
                />
                <span>
                  <Button color="inherit">세션 추가</Button>
                </span>
              </Box>

              <InterviewSessionList />
            </Stack>

            {/* 참여자 수 제한 */}
            <Stack gap={1}>
              <FormLabelWithDescription
                label="참여자 수 제한"
                description="실험에 참여 가능한 인원 수를 설정합니다. 입력 가능한 최대 참여자 수는 예약 가능 날짜 및 실험 시작/종료 시간을 기준으로 계산됩니다."
                labelProps={{ required: true }}
              />
              <span>
                <TextField
                  required
                  type="number"
                  endAdornment={
                    <InputAdornment position="end">명</InputAdornment>
                  }
                />
              </span>
            </Stack>
          </CardWithTitle>
        </Stack>
      </Container>

      <ProjectBottomNav />
    </Stack>
  );
}
