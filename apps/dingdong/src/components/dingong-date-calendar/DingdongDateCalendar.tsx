import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const DingdongDateCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{ m: 0, width: "100%" }}
        slots={{
          calendarHeader: () => <>header</>,
        }}
      />
    </LocalizationProvider>
  );
};

export default DingdongDateCalendar;
