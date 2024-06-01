import {
  Box,
  Button,
  FormControlLabel,
  Popover,
  Stack,
  Switch,
} from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { DatePickerOpenIcon, TextField } from "src/shared";

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

const getIsWeekend = (date: Dayjs) => date.day() === 0 || date.day() === 6;

const getWeekendArray = (
  watchedStartDate: string,
  watchedEndDate: string,
  excludedDate: string[]
) => {
  if (!watchedStartDate || !watchedEndDate) {
    return [];
  }

  const weekendArray = [];

  let startDate = dayjs(watchedStartDate);
  const endDate = dayjs(watchedEndDate);

  for (; startDate.isBefore(endDate); startDate = startDate.add(1, "day")) {
    const formattedDate = startDate.format(EXCLUDED_DATE_FORMAT);
    if (getIsWeekend(startDate) && !excludedDate.includes(formattedDate)) {
      weekendArray.push(formattedDate);
    }
  }

  return weekendArray;
};

const checkedAllWeekendExcept = (
  startDate: string,
  endDate: string,
  excludedDate: string[]
) => {
  if (!startDate || !endDate) {
    return false;
  }

  return getWeekendArray(startDate, endDate, excludedDate)
    .map((date) => excludedDate.includes(date))
    .every(Boolean);
};

//
//
//

const ExcludedDatePicker = ({ value, onChange }: ExcludedDatePickerProps) => {
  const { control } = useFormContext();

  const watchedStartDate = useWatch({
    control,
    name: "startDate",
  });

  const watchedEndDate = useWatch({
    control,
    name: "endDate",
  });

  const [usingExceptWeekend, setUsingExceptWeekend] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  React.useEffect(() => {
    setUsingExceptWeekend(
      checkedAllWeekendExcept(watchedStartDate, watchedEndDate, value)
    );
  }, [value, watchedEndDate, watchedStartDate]);

  //
  //
  //

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
          minDate={watchedStartDate}
          maxDate={watchedEndDate}
          slotProps={{
            day: (date) => {
              const isSelected = value.includes(
                date.day.format(EXCLUDED_DATE_FORMAT)
              );
              if (isSelected) {
                return {
                  sx: {
                    ":focus": {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      color: "white",
                    },
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: "white",
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.secondary.main,
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
            control={
              <Switch
                checked={usingExceptWeekend}
                value={usingExceptWeekend}
                onChange={(e) => {
                  if (e.target.checked) {
                    setUsingExceptWeekend(true);
                    onChange([
                      ...value,
                      ...getWeekendArray(
                        watchedStartDate,
                        watchedEndDate,
                        value
                      ),
                    ]);
                  } else {
                    setUsingExceptWeekend(false);
                    onChange(value.filter((v) => !getIsWeekend(dayjs(v))));
                  }
                }}
              />
            }
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
