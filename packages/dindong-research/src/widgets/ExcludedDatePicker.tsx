import {
  Box,
  Button,
  FormControlLabel,
  Popover,
  Stack,
  Switch,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import React from "react";
import { DatePickerOpenIcon } from "src/shared/DatePickerIcon";
import TextField from "src/shared/TextField";

export const EXCLUDED_DATE_FORMAT = "YYYY. MM. DD.";

//
//
//

interface ExcludedDatePickerProps {
  value: string[];
  onChange: (value: string[]) => void;
}

//
//
//

const ExcludedDatePicker = ({ value, onChange }: ExcludedDatePickerProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  console.log("value", value);
  return (
    <Box>
      <TextField
        readOnly
        fullWidth
        placeholder="제외할 날짜를 선택해주세요."
        endAdornment={<DatePickerOpenIcon />}
        sx={{ cursor: "pointer" }}
        inputProps={{ style: { cursor: "pointer" } }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />

      {/* DatePicker */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: { borderRadius: 2 },
          },
        }}
        onClose={() => setAnchorEl(null)}
      >
        <DateCalendar
          value={null}
          slotProps={{
            day: (date) => {
              const isSelected = value.includes(
                date.day.format(EXCLUDED_DATE_FORMAT)
              );
              if (isSelected) {
                return {
                  sx: {
                    ":focus": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "black",
                      opacity: 0.8,
                    },
                  },
                };
              }

              return {};
            },
          }}
          onChange={(date) => {
            if (value.includes(date.format(EXCLUDED_DATE_FORMAT))) {
              onChange(
                value.filter((v) => v !== date.format(EXCLUDED_DATE_FORMAT))
              );
            } else {
              onChange([...value, date.format(EXCLUDED_DATE_FORMAT)]);
            }
          }}
        />

        {/* actions */}
        <Stack
          gap={1}
          p={3}
          pt={0}
          direction="row"
          justifyContent="space-between"
        >
          <FormControlLabel
            label="주말 제외"
            control={<Switch />}
            labelPlacement="start"
          />

          <Button color="inherit" onClick={() => onChange([])}>
            초기화
          </Button>
        </Stack>
      </Popover>
    </Box>
  );
};

export default ExcludedDatePicker;
