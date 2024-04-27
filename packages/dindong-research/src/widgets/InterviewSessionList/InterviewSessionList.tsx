import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "src/shared/TextField";
import dayjs from "dayjs";

const mockData = [
  { start: "2024.04.05 10:00", end: "2024.04.05 11:00", particpants: 3 },
  { start: "2024.04.05 15:00", end: "2024.04.05 16:00", particpants: 3 },
  { start: "2024.04.05 18:00", end: "2024.04.05 19:00", particpants: 3 },
];

const InterviewSessionList = () => {
  return (
    <Stack gap={2}>
      {mockData.map((session, index) => (
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
              value={dayjs(session.start)}
              slotProps={{ textField: { fullWidth: true } }}
            />
            <TimePicker
              value={dayjs(session.end)}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Stack>

          <TextField
            value={session.particpants}
            sx={{ width: 220 }}
            InputProps={{
              endAdornment: <InputAdornment position="end">명</InputAdornment>,
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default InterviewSessionList;
