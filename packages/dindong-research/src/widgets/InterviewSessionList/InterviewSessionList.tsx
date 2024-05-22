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
import dayjs, { isDayjs } from "dayjs";
import { Check } from "@mui/icons-material";
import { TimeSlotType } from "src/app/workspaces/[workspaceId]/projects/[projectId]/information/page";

export const DEFAULT_TIMESLOT: TimeSlotType = {
  startTime: null,
  endTime: null,
  maxParticipants: 0,
};

//
//
//

const convertTimeToDayjs = (time: string) => {
  if (!time) {
    return null;
  }

  if (isDayjs(time)) {
    return time;
  }

  const [h, m, s] = time?.split(":");

  return dayjs()
    .set("hour", parseInt(h))
    .set("minute", parseInt(m))
    .set("second", parseInt(s));
};

const InterviewSessionList = () => {
  const { control, getValues, setValue } = useFormContext();

  const watchedTimeslots: ExperimentTimeslotRequest[] =
    useWatch({
      control,
      name: "experimentTimeslots",
    }) ?? [];

  return (
    <Stack gap={2}>
      {watchedTimeslots.map((session, index) => (
        <Controller
          key={index}
          control={control}
          name={`experimentTimeslots.${index}`}
          render={({ field }) => (
            <Box display="flex" key={index} gap={2} alignItems="center">
              <Typography variant="caption">세션 {index + 1}</Typography>
              {/* Date time picker range */}
              <Stack
                flexDirection="row"
                divider={<span>~</span>}
                alignItems="center"
                gap={2}
                flexGrow={1}
              >
                <TimePicker
                  value={convertTimeToDayjs(field.value.startTime)}
                  slotProps={{
                    textField: { fullWidth: true },
                    openPickerIcon: <Check />,
                  }}
                  onChange={(date) =>
                    field.onChange({ ...field.value, startTime: date })
                  }
                />
                <TimePicker
                  value={convertTimeToDayjs(field.value.endTime)}
                  slotProps={{ textField: { fullWidth: true } }}
                  onChange={(date) =>
                    field.onChange({ ...field.value, endTime: date })
                  }
                />
              </Stack>
              <TextField
                value={session.maxParticipants}
                sx={{ width: 220 }}
                type="number"
                endAdornment={
                  <InputAdornment position="end">명</InputAdornment>
                }
                onChange={(e) =>
                  field.onChange({
                    ...field.value,
                    maxParticipants: e.target.value,
                  })
                }
              />

              <IconButton
                onClick={() =>
                  setValue(
                    "experimentTimeslots",
                    watchedTimeslots.filter((_, i) => i !== index)
                  )
                }
              >
                <DeleteRoundedIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        />
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
