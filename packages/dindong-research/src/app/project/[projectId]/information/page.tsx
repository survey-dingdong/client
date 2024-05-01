"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Collapse,
  Container,
  FormControlLabel,
  FormHelperText,
  FormLabel,
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
import { AddressForm, CopyIconButton } from "src/widgets";
import InterviewSessionList from "src/widgets/InterviewSessionList/InterviewSessionList";
import { ProjectBottomNav } from "src/widgets/ProjectBottomNav";
import { bottomNavHeight } from "src/widgets/ProjectBottomNav/ProjectBottomNav";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import { Project } from "src/types/project";
import { DatePicker, PickersLayout } from "@mui/x-date-pickers";
import { useProject } from "src/hooks/useProject";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { DateChip } from "src/widgets/DateChip";

//
//
//

const excludedDateFormat = "YYYY. MM. DD.";

export default function Page() {
  const formMethods = useForm<Project>();
  const { projectId } = useParams();

  const { project } = useProject({ id: Number(projectId) });

  const [type, setType] = React.useState("online");
  const [usingExcludeDates, setUsingExcludeDates] = React.useState(false);

  // watched form values
  const watchedStartDate = useWatch({
    name: "start_date",
    control: formMethods.control,
  });
  const watchedEndDate = useWatch({
    name: "end_date",
    control: formMethods.control,
  });

  //
  //
  //
  React.useEffect(() => {
    if (project) {
      formMethods.reset(project);
      formMethods.setValue(
        "excluded_dates",
        project.excluded_dates.map((date) =>
          dayjs(date).format(excludedDateFormat)
        )
      );
      setUsingExcludeDates(!!project.excluded_dates?.length);
    }
  }, [project]);

  /**
   *
   */
  const handleSubmit = formMethods.handleSubmit((data) => {
    console.log(data);
  });

  //
  //
  //

  return (
    <FormProvider {...formMethods}>
      <Stack
        width="100%"
        sx={{ position: "relative", pb: bottomNavHeight }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Container maxWidth="lg" sx={{ py: 7 }}>
          <Stack gap={4}>
            <PageHeader
              title={
                <>
                  <Chip label="비공개" sx={{ mr: 1.5 }} />
                  {project?.title}
                </>
              }
            />
            {/*  */}
            <CardWithTitle title="기본 정보">
              <Controller
                name="title"
                control={formMethods.control}
                render={({ field }) => (
                  <TextField
                    label="프로젝트 명"
                    required
                    fullWidth
                    {...field}
                  />
                )}
              />
              <Controller
                name="description"
                control={formMethods.control}
                render={({ field }) => (
                  <TextField
                    label="프로젝트 설명"
                    placeholder="프로젝트 설명을 입력해주세요."
                    rows={3}
                    multiline
                    required
                    fullWidth
                    {...field}
                  />
                )}
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
                    <Controller
                      name="start_date"
                      control={formMethods.control}
                      render={({ field }) => (
                        <DatePicker
                          slotProps={{ textField: { fullWidth: true } }}
                          {...field}
                          value={dayjs(field.value)}
                        />
                      )}
                    />
                    <Controller
                      name="end_date"
                      control={formMethods.control}
                      render={({ field }) => (
                        <DatePicker
                          slotProps={{ textField: { fullWidth: true } }}
                          {...field}
                          value={dayjs(field.value)}
                        />
                      )}
                    />
                  </Stack>

                  <Controller
                    name="excluded_dates"
                    control={formMethods.control}
                    render={({ field }) => (
                      <Stack>
                        <FormControlLabel
                          label="제외할 날짜 설정"
                          componentsProps={{ typography: { variant: "body2" } }}
                          sx={{ width: "fit-content" }}
                          control={
                            <Checkbox
                              checked={usingExcludeDates}
                              onChange={(e) => {
                                setUsingExcludeDates(e.target.checked);
                              }}
                            />
                          }
                        />

                        <Collapse in={usingExcludeDates}>
                          <Card
                            elevation={0}
                            sx={{ bgcolor: "#F8FAFB", borderRadius: 4 }}
                          >
                            <CardContent component={Stack} sx={{ gap: 2 }}>
                              <DatePicker
                                disablePast
                                value={null}
                                minDate={dayjs(watchedStartDate)}
                                maxDate={dayjs(watchedEndDate)}
                                shouldDisableDate={(date) => {
                                  return field.value?.includes(
                                    date.format(excludedDateFormat)
                                  );
                                }}
                                onChange={(date) => {
                                  if (date) {
                                    field.onChange([
                                      ...field.value,
                                      date.format(excludedDateFormat),
                                    ]);
                                  }
                                }}
                              />

                              {field.value?.length > 0 ? (
                                <Stack gap={1}>
                                  <Typography variant="body2" fontWeight={700}>
                                    제외 할 날짜 목록
                                  </Typography>
                                  <Box display="flex" gap={1}>
                                    {field.value?.map((date) => (
                                      <DateChip
                                        key={date}
                                        label={date}
                                        onDelete={() => {
                                          field.onChange(
                                            field.value.filter(
                                              (d) => d !== date
                                            )
                                          );
                                        }}
                                      />
                                    ))}
                                  </Box>
                                </Stack>
                              ) : null}
                            </CardContent>
                          </Card>
                        </Collapse>
                      </Stack>
                    )}
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
                  <Controller
                    name="max_participants"
                    control={formMethods.control}
                    render={({ field }) => (
                      <TextField
                        required
                        type="number"
                        endAdornment={
                          <InputAdornment position="end">명</InputAdornment>
                        }
                        // TODO: add max participant validation
                        helperText="참여 가능한 최대 참가자 수는 4명입니다."
                        {...field}
                      />
                    )}
                  />
                </span>
              </Stack>
            </CardWithTitle>

            {/* 실험 유형 */}
            <CardWithTitle title="실험 유형">
              <Controller
                name="experiment_type"
                control={formMethods.control}
                render={({ field }) => (
                  <ToggleButtonGroup
                    value={type}
                    exclusive
                    onChange={(_, newType) => setType(newType)}
                  >
                    <ToggleButton value="offline">대면</ToggleButton>
                    <ToggleButton value="online">비대면</ToggleButton>
                  </ToggleButtonGroup>
                )}
              />

              <Stack>
                <Controller
                  name="location"
                  control={formMethods.control}
                  render={({ field }) =>
                    type === "online" ? (
                      <TextField
                        label="참여 URL"
                        helperText="비대면 실험 참여를 위한 URL이 있는 경우 입력해 주세요.
                    입력된 URL은 예약이 완료된 참여자에 한하여 모바일 앱 채팅
                    알림으로 전송됩니다."
                        fullWidth
                        {...field}
                      />
                    ) : (
                      <>
                        <FormLabel required>실험 장소</FormLabel>
                        <AddressForm />
                        <FormHelperText>
                          실험 진행을 위한 주소를 입력할 수 있습니다. 주소는
                          참여자에게 공개됩니다.
                        </FormHelperText>
                      </>
                    )
                  }
                />
              </Stack>

              <Stack gap={0.5}>
                <Typography variant="body1" fontWeight={700}>
                  참여 코드
                </Typography>
                <Box display="flex" gap={1.5} alignItems="center">
                  <Controller
                    name="participant_code"
                    control={formMethods.control}
                    render={({ field }) => (
                      <OutlinedInput readOnly value={field.value} />
                    )}
                  />
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
    </FormProvider>
  );
}
