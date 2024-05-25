import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React from "react";

import TextField from "src/shared/TextField";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { ExperimentTimeslotRequest } from "generated-client";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import dayjs, { Dayjs, isDayjs } from "dayjs";
import { TimeSlotType } from "src/app/workspaces/[workspaceId]/projects/[projectId]/information/page";
import isBetween from "dayjs/plugin/isBetween";
import { TimePickerIcon } from "src/shared/TimePickerIcon";
dayjs.extend(isBetween);

//
//
//

export const DEFAULT_TIMESLOT: TimeSlotType = {
  startTime: null,
  endTime: null,
  maxParticipants: 1,
};

const MT = 1.2;

//
//
//

export const convertTimeToDayjs = (time: string) => {
  if (!time) {
    return null;
  }

  if (isDayjs(time)) {
    return time;
  }

  const [h, m, s] = time?.split(":");
  console.log(
    dayjs()
      .set("hour", parseInt(h))
      .set("minute", parseInt(m))
      .set("second", parseInt(s))
  );
  return dayjs()
    .set("hour", parseInt(h))
    .set("minute", parseInt(m))
    .set("second", parseInt(s));
};

const getIsDuplicated = (
  time: Dayjs,
  timeslots: ExperimentTimeslotRequest[],
  currentSlotIndex: number
) => {
  for (const [index, slot] of timeslots.entries()) {
    if (
      time.isBetween(slot.startTime, slot.endTime, "minute", "[]") &&
      currentSlotIndex > index
    ) {
      return true;
    }
  }

  return false;
};

//
//
//

const InterviewSessionList = () => {
  const { control, setValue } = useFormContext();

  const watchedTimeslots: ExperimentTimeslotRequest[] =
    useWatch({
      control,
      name: "experimentTimeslots",
    }) ?? [];

  //
  //
  //

  return (
    <Stack gap={2}>
      {watchedTimeslots.map((session, index) => (
        <Box display="flex" key={index} gap={2}>
          <Typography variant="caption" sx={{ mt: MT }}>
            세션 {index + 1}
          </Typography>

          {/* Date time picker range */}
          <Stack
            flexDirection="row"
            divider={<Box sx={{ mt: MT }}>~</Box>}
            gap={2}
            flexGrow={1}
          >
            <Controller
              key={index}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "세션 시간을 입력해주세요.",
                },
                validate: (value) => {
                  const isDuplicated = getIsDuplicated(
                    value,
                    watchedTimeslots,
                    index
                  );

                  if (isDuplicated) {
                    return "중복된 시간을 입력할 수 없습니다.";
                  }
                },
              }}
              name={`experimentTimeslots.${index}.startTime`}
              render={({ field, fieldState }) => (
                <TimePicker
                  {...field}
                  value={field.value}
                  slots={{
                    openPickerIcon: TimePickerIcon,
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      helperText: fieldState.error?.message,
                      error: !!fieldState.error,
                    },
                  }}
                />
              )}
            />

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "세션 시간을 입력해주세요.",
                },
                validate: (value) => {
                  const isDuplicated = getIsDuplicated(
                    value,
                    watchedTimeslots,
                    index
                  );

                  if (isDuplicated) {
                    return "중복된 시간을 입력할 수 없습니다.";
                  }

                  if (value && session.startTime) {
                    const startTime = session.startTime;
                    const endTime = value;

                    if (!endTime?.isAfter(startTime)) {
                      return "시작 시간보다 늦은 시간을 입력해주세요.";
                    }
                  }

                  return true;
                },
              }}
              name={`experimentTimeslots.${index}.endTime`}
              render={({ field, fieldState }) => (
                <TimePicker
                  {...field}
                  value={field.value}
                  slots={{
                    openPickerIcon: TimePickerIcon,
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      helperText: fieldState.error?.message,
                      error: !!fieldState.error,
                    },
                  }}
                  minTime={watchedTimeslots[index]?.startTime}
                />
              )}
            />
          </Stack>

          {/* Max participants */}
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "참가 인원을 입력해주세요.",
              },
              min: {
                value: 1,
                message: "1명 이상의 참가 인원을 입력해주세요.",
              },
            }}
            name={`experimentTimeslots.${index}.maxParticipants`}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ maxWidth: 220 }}
                type="number"
                helperText={fieldState.error?.message}
                error={!!fieldState.error}
                endAdornment={
                  <InputAdornment position="end">명</InputAdornment>
                }
              />
            )}
          />

          <span>
            <IconButton
              disabled={watchedTimeslots.length === 1}
              onClick={() =>
                setValue(
                  "experimentTimeslots",
                  watchedTimeslots.filter((_, i) => i !== index)
                )
              }
              sx={{ mt: 0.3 }}
            >
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </span>
        </Box>
      ))}

      <Button
        color="inherit"
        onClick={() =>
          setValue("experimentTimeslots", [
            ...watchedTimeslots,
            DEFAULT_TIMESLOT,
          ])
        }
      >
        세션 추가
      </Button>
    </Stack>
  );
};

export default InterviewSessionList;
