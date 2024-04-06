"use client";
import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "src/shared/TextField";
import dayjs from "dayjs";

const mockData = [
  { start: "2024.04.05 10:00", end: "2024.04.05 11:00", particpants: 3 },
  { start: "2024.04.05 10:00", end: "2024.04.05 11:00", particpants: 3 },
  { start: "2024.04.05 10:00", end: "2024.04.05 11:00", particpants: 3 },
];

const InterviewSessionList = () => {
  return (
    <Stack gap={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              <DateTimePicker
                value={dayjs(session.start)}
                slotProps={{ textField: { fullWidth: true } }}
              />
              <DateTimePicker
                value={dayjs(session.end)}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </Stack>

            <TextField
              value={session.particpants}
              sx={{ width: 220 }}
              endAdornment={<InputAdornment position="end">명</InputAdornment>}
            />
          </Box>
        ))}
      </LocalizationProvider>
    </Stack>
  );
};

export default InterviewSessionList;
