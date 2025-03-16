import { Alert, AlertProps, AlertTitle } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

export interface BannerProps extends Omit<AlertProps, "children"> {
  title?: string;
  description?: string;
}

const Banner = ({ title, description, ...props }: BannerProps) => {
  return (
    <Alert
      {...props}
      variant={props.variant || "outlined"}
      iconMapping={{
        success: <CheckCircleRoundedIcon />,
        info: <InfoRoundedIcon />,
        warning: <WarningRoundedIcon />,
        error: <ErrorRoundedIcon />,
      }}
      sx={{
        whiteSpace: "pre-wrap",
      }}
    >
      {title && (
        <AlertTitle sx={{ fontWeight: 600, color: "status.info" }}>
          {title}
        </AlertTitle>
      )}
      {description}
    </Alert>
  );
};

export default Banner;
