import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateCalendar,
  DateCalendarProps,
} from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import { Dayjs } from "dayjs";

const DingdongDateCalendar = (props: DateCalendarProps<Dayjs>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        {...props}
        sx={{ m: 0, width: "100%" }}
        slots={{
          calendarHeader: () => <>header</>,
        }}
      />
    </LocalizationProvider>
  );
};

export default DingdongDateCalendar;
