"use client";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
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
import {
  CardWithTitle,
  FormLabelWithDescription,
  TextField,
  PageHeader,
  DatePickerOpenIcon,
} from "src/shared";
import {
  AddressForm,
  convertTimeToDayjs,
  CopyIconButton,
  DateChip,
  DEFAULT_TIMESLOT,
  ExcludedDatePicker,
  InterviewSessionList,
  ProjectBottomNav,
  PublicTag,
} from "src/widgets";

import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { GET_PROJECT_QUERY_KEY, useProject } from "src/hooks/useProject";
import { useParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useSnackbar } from "notistack";
import {
  ExperimentTimeslotRequest,
  ExperimentTypeEnum,
  ProjectTypeEnum,
  PutProjectRequest,
} from "generated-client";
import { useQueryClient } from "@tanstack/react-query";
import isBetween from "dayjs/plugin/isBetween";
import { projectApi } from "src/apis/client";
dayjs.extend(isBetween);

//
//
//

export interface TimeSlotType
  extends Omit<ExperimentTimeslotRequest, "startTime" | "endTime"> {
  startTime: null | Dayjs;
  endTime: null | Dayjs;
}

export interface ProjectFormType
  extends Omit<
    PutProjectRequest,
    "startDate" | "endDate" | "experimentTimeslots"
  > {
  startDate: Dayjs;
  endDate: Dayjs;
  experimentTimeslots: TimeSlotType[];
}

type Params = {
  workspaceId: string;
  projectId: string;
};

//
//
//

const SERVER_DATE_FORMAT = "YYYY-MM-DD";
const SERVER_TIME_FORMAT = "HH:mm:ss";

const TODAY = dayjs();

//
//
//

export default function Page() {
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  const params = useParams<Params>();

  const _workspaceId = Number(params?.workspaceId);
  const _projectId = Number(params?.projectId);

  const { project } = useProject({
    workspaceId: _workspaceId,
    projectId: _projectId,
  });

  const formMethods = useForm<ProjectFormType>({
    defaultValues: project as unknown as ProjectFormType,
  });

  const [usingExcludeDates, setUsingExcludeDates] = React.useState(
    !!project?.excludedDates.length
  );

  // watched form values
  const watchedStartDate = useWatch({
    name: "startDate",
    control: formMethods.control,
  });
  const watchedEndDate = useWatch({
    name: "endDate",
    control: formMethods.control,
  });
  const watchedExperimentType = useWatch({
    name: "experimentType",
    control: formMethods.control,
  });

  const watchedTimeslots: TimeSlotType[] = useWatch({
    name: "experimentTimeslots",
    control: formMethods.control,
  });

  const watchedExcludeDates = useWatch({
    name: "excludedDates",
    control: formMethods.control,
  });

  const sumOfSessionParticipants = watchedTimeslots?.reduce(
    (acc, session) => acc + Number(session.maxParticipants),
    0
  );

  const possibleParticipantsCount =
    (dayjs(watchedEndDate).diff(watchedStartDate, "day") +
      1 -
      watchedExcludeDates?.length) *
    sumOfSessionParticipants;

  //
  //
  //
  React.useEffect(() => {
    if (project) {
      formMethods.reset({
        ...project,
        experimentTimeslots: project.experimentTimeslots.map((timeslot) => ({
          ...timeslot,
          startTime: convertTimeToDayjs(timeslot.startTime),
          endTime: convertTimeToDayjs(timeslot.endTime),
        })),
        startDate: dayjs(project.startDate),
        endDate: dayjs(project.endDate),
      } as unknown as ProjectFormType);

      if (!project?.experimentTimeslots?.length) {
        formMethods.setValue("experimentTimeslots", [DEFAULT_TIMESLOT]);
      }

      if (!project?.endDate) {
        formMethods.setValue("endDate", TODAY.add(1, "month"));
      }

      if (!project?.startDate) {
        formMethods.setValue("startDate", TODAY);
      }

      if (!project?.experimentTimeslots?.length) {
        formMethods.setValue("experimentTimeslots", [DEFAULT_TIMESLOT]);
      }

      setUsingExcludeDates(!!project.excludedDates?.length);
    }
  }, [formMethods, project]);

  /**
   *
   */
  const handleSubmit = formMethods.handleSubmit(async (data) => {
    try {
      projectApi.updateProjectProjectsProjectIdPut({
        projectId: _projectId,
        projectType: ProjectTypeEnum.Experiment,
        putProjectRequest: {
          ...data,
          startDate: dayjs(data.startDate).format(SERVER_DATE_FORMAT) as any,
          endDate: dayjs(data.endDate).format(SERVER_DATE_FORMAT) as any,
          experimentTimeslots: data.experimentTimeslots.map(
            (timeslot: TimeSlotType) => ({
              ...timeslot,
              startTime: timeslot.startTime?.format(SERVER_TIME_FORMAT),
              endTime: timeslot.endTime?.format(SERVER_TIME_FORMAT),
            })
          ) as any,
          excludedDates: usingExcludeDates
            ? (data.excludedDates?.map((date) =>
                dayjs(date).format(SERVER_DATE_FORMAT)
              ) as any)
            : [],
        },
      });

      queryClient.invalidateQueries({ queryKey: [GET_PROJECT_QUERY_KEY] });

      enqueueSnackbar("프로젝트 정보가 성공적으로 저장되었습니다.", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("프로젝트 정보를 저장하는 중 오류가 발생했습니다.", {
        variant: "error",
      });
    }
  });

  // endDate 변경했을 때 excludeDates 필터
  React.useEffect(() => {
    formMethods.setValue(
      "excludedDates",
      watchedExcludeDates?.filter((date) =>
        dayjs(date).isBetween(watchedStartDate, watchedEndDate, "day", "[]")
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedEndDate, watchedStartDate]);

  //
  //
  //

  return (
    <FormProvider {...formMethods}>
      <Stack
        width="100%"
        height="100%"
        component="form"
        onSubmit={handleSubmit}
      >
        <Box overflow="auto">
          <Container maxWidth="lg" sx={{ py: 7 }}>
            <Stack gap={4}>
              <PageHeader
                title={
                  <>
                    <PublicTag
                      size="small"
                      isPublic={!!project?.isPublic}
                      sx={{ mr: 1.5 }}
                    />
                    {project?.title}
                  </>
                }
              />
              {/*  */}
              <CardWithTitle title="기본 정보">
                <Controller
                  name="title"
                  control={formMethods.control}
                  rules={{
                    required: { value: true, message: "필수 입력 항목입니다." },
                  }}
                  render={({ field, fieldState }) => (
                    <TextField
                      label="프로젝트 명"
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      required
                      fullWidth
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="description"
                  control={formMethods.control}
                  rules={{
                    required: { value: true, message: "필수 입력 항목입니다." },
                  }}
                  render={({ field, fieldState }) => (
                    <TextField
                      label="프로젝트 설명"
                      placeholder="프로젝트 설명을 입력해주세요."
                      rows={3}
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
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
                        name="startDate"
                        control={formMethods.control}
                        rules={{
                          required: {
                            value: true,
                            message: "필수 입력 항목입니다.",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <DatePicker
                            slots={{
                              openPickerIcon: DatePickerOpenIcon,
                            }}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: fieldState.invalid,
                                helperText: fieldState.error?.message,
                              },
                            }}
                            {...field}
                            value={dayjs(field.value)}
                          />
                        )}
                      />
                      <Controller
                        name="endDate"
                        control={formMethods.control}
                        rules={{
                          required: {
                            value: true,
                            message: "필수 입력 항목입니다.",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <DatePicker
                            slots={{
                              openPickerIcon: DatePickerOpenIcon,
                            }}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: fieldState.invalid,
                                helperText: fieldState.error?.message,
                              },
                            }}
                            {...field}
                            value={dayjs(field.value)}
                            minDate={watchedStartDate}
                          />
                        )}
                      />
                    </Stack>

                    <Controller
                      name="excludedDates"
                      control={formMethods.control}
                      render={({ field }) => (
                        <Stack>
                          <FormControlLabel
                            label="제외할 날짜 사용"
                            componentsProps={{
                              typography: { variant: "body2" },
                            }}
                            sx={{ width: "fit-content" }}
                            control={
                              <Checkbox
                                checked={usingExcludeDates}
                                onChange={(e) =>
                                  setUsingExcludeDates(e.target.checked)
                                }
                              />
                            }
                          />

                          <Collapse in={usingExcludeDates}>
                            <Card
                              elevation={0}
                              sx={{ bgcolor: "#F8FAFB", borderRadius: 4 }}
                            >
                              <CardContent component={Stack} sx={{ gap: 2 }}>
                                <ExcludedDatePicker
                                  value={field.value as unknown as string[]}
                                  onChange={field.onChange}
                                />

                                {field.value?.length > 0 ? (
                                  <Stack gap={1}>
                                    <Typography
                                      variant="body2"
                                      fontWeight={700}
                                    >
                                      제외할 날짜 목록
                                    </Typography>
                                    <Box display="flex" gap={1} flexWrap="wrap">
                                      {field.value?.map((date: any) => (
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
                  <FormLabelWithDescription
                    label="실험 시작/종료 시간"
                    description={`예약 가능한 실험 시작 및 종료 시간을 설정합니다. 입력된 시간은 여러 개의 실험 세션으로 지정되며, 일 단위로 관리됩니다.\n참여자는 예약 가능 날짜 범위 내에서 참여 가능한 시간대를 선택하여 예약 가능합니다.`}
                    labelProps={{ required: true }}
                  />

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
                      name="maxParticipants"
                      control={formMethods.control}
                      rules={{
                        required: {
                          value: true,
                          message: "필수 입력 항목입니다.",
                        },
                        min: {
                          value: 1,
                          message: "1명 이상 입력해주세요.",
                        },
                        max: {
                          value: possibleParticipantsCount,
                          message: `참여 가능한 최대 참가자 수는 ${possibleParticipantsCount}명입니다.`,
                        },
                      }}
                      render={({ field, fieldState }) => (
                        <TextField
                          required
                          type="number"
                          endAdornment={
                            <InputAdornment position="end">명</InputAdornment>
                          }
                          error={fieldState.invalid}
                          helperText={
                            fieldState.error?.message ||
                            ((
                              <span>
                                참여 가능한 최대 참가자 수는{" "}
                                <b>{possibleParticipantsCount}</b>명입니다.
                              </span>
                            ) as unknown as string)
                          }
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
                  name="experimentType"
                  control={formMethods.control}
                  render={({ field }) => (
                    <ToggleButtonGroup
                      {...field}
                      exclusive
                      sx={{ width: "420px" }}
                    >
                      <ToggleButton value={ExperimentTypeEnum.Offline}>
                        대면
                      </ToggleButton>
                      <ToggleButton value={ExperimentTypeEnum.Online}>
                        비대면
                      </ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />

                <Stack>
                  <Controller
                    name="location"
                    control={formMethods.control}
                    render={({ field }) =>
                      watchedExperimentType === "online" ? (
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
                    <OutlinedInput readOnly value={project?.participantCode} />
                    <CopyIconButton content={project?.participantCode ?? ""} />
                  </Box>
                  <FormHelperText sx={{ whiteSpace: "pre-wrap" }}>
                    {`참여자의 실험 참여 여부를 체크하기 위한 참여코드가 발급됩니다.\n참여자는 실험 참여 10분 전 또는 참여 이후 모바일 앱을 통해 해당코드를 입력하여 참여 완료 여부를 입력할 수 있습니다.`}
                  </FormHelperText>
                </Stack>
              </CardWithTitle>
            </Stack>
          </Container>
        </Box>
        <ProjectBottomNav />
      </Stack>
    </FormProvider>
  );
}
