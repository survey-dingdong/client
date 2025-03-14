import { Icon } from "@dingdong/design-system";
import { IconButton } from "@mui/material";

const SettingButton: React.FC = () => {
  return (
    <IconButton
      size="small"
      sx={{ color: (theme) => theme.palette.label.normal }}
    >
      <Icon icon="tune" size="small" />
    </IconButton>
  );
};

export default SettingButton;
