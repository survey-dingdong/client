"use client";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import CardWithTitle from "src/shared/CardWithTitle";
import FormLabelWithDescription from "src/shared/FormLabelWithDescription";
import PageHeader from "src/shared/PageHeader";
import TextField from "src/shared/TextField";
import { CopyIconButton } from "src/widgets";
import InterviewSessionList from "src/widgets/InterviewSessionList/InterviewSessionList";
import { ProjectBottomNav } from "src/widgets/ProjectBottomNav";
import { bottomNavHeight } from "src/widgets/ProjectBottomNav/ProjectBottomNav";

export default function Page() {
  const [type, setType] = React.useState("online");

  return (
    <Stack width="100%" sx={{ position: "relative", pb: bottomNavHeight }}>
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

          {/* 실험 유형 */}
          <CardWithTitle title="실험 유형">
            <ToggleButtonGroup value={type}>
              <ToggleButton value="online">대면</ToggleButton>
              <ToggleButton value="offline">비대면</ToggleButton>
            </ToggleButtonGroup>

            <Stack>
              <FormLabel required>실험 장소</FormLabel>
              <Box display="flex" gap={2} mt={0.5}>
                <OutlinedInput fullWidth placeholder="기본 주소(필수)" />
                <OutlinedInput fullWidth placeholder="상세 주소(선택)" />
              </Box>
              <FormHelperText>
                실험 진행을 위한 주소를 입력할 수 있습니다. 주소는 참여자에게
                공개됩니다.
              </FormHelperText>
            </Stack>

            <Stack gap={0.5}>
              <Typography variant="body1" fontWeight={700}>
                참여 코드
              </Typography>
              <Box display="flex" gap={1.5} alignItems="center">
                <OutlinedInput readOnly value="ZXWE" />

                <CopyIconButton content="ZXWE" />
              </Box>
              <FormHelperText sx={{ whiteSpace: "pre-wrap" }}>
                {`참여자의 실험 참여 여부를 체크하기 위한 참여코드가 발급됩니다.\n참여자는 실험 참여 10분 전 또는 참여 이후 모바일 앱을 통해 해당코드를 입력하여 참여 완료 여부를 입력할 수 있습니다.`}
              </FormHelperText>
            </Stack>
          </CardWithTitle>
        </Stack>
      </Container>

      <ProjectBottomNav />
    </Stack>
  );
}