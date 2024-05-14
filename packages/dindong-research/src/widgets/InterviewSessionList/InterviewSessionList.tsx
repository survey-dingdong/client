import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React from "react";

import TextField from "src/shared/TextField";
import dayjs from "dayjs";

type SessionType = {
  start?: string | null;
  end?: string | null;
  participants?: number;
};

const mockData = [
  { start: "2024.04.05 10:00", end: "2024.04.05 11:00", participants: 3 },
  { start: "2024.04.05 15:00", end: "2024.04.05 16:00", participants: 3 },
  { start: "2024.04.05 18:00", end: "2024.04.05 19:00", participants: 3 },
];

const InterviewSessionList = () => {
  const [sessions, setSessions] = React.useState<SessionType[]>(mockData);

  return (
    <Stack gap={2}>
      {sessions.map((session, index) => (
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
            value={session.participants}
            sx={{ width: 220 }}
            endAdornment={<InputAdornment position="end">명</InputAdornment>}
          />
        </Box>
      ))}

      <Button
        color="inherit"
        onClick={() => setSessions((prev) => [...prev, {}])}
      >
        세션 추가
      </Button>
    </Stack>
  );
};

export default InterviewSessionList;
