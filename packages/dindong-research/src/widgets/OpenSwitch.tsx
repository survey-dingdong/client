import { FormControlLabel, Switch, Tooltip } from "@mui/material";
import React from "react";
import { OpenProjectDialog } from "src/shared";

//
//
//

interface OpenSwitchProps {
  disabled?: boolean;
  originValue?: boolean;
  onToggle: () => void;
}

//
//
//

const OpenSwitch: React.FC<OpenSwitchProps> = ({
  disabled,
  originValue = false,
  onToggle,
}) => {
  const [open, setOpen] = React.useState(originValue);
  const [checked, setChecked] = React.useState(originValue);

  //
  //
  //

  const handleToggle = () => {
    setChecked((prev) => !prev);
    onToggle();
    setOpen(false);
  };

  return (
    <>
      <Tooltip
        title={
          !disabled
            ? ""
            : "프로젝트를 공개하려면 프로젝트 정보 입력 및 저장이 완료되어야 합니다."
        }
      >
        <span>
          <FormControlLabel
            labelPlacement="start"
            disabled={disabled}
            label="서베이 플랫폼에 공개하기"
            slotProps={{
              typography: {
                variant: "body1",
              },
            }}
            control={
              <Switch
                checked={checked}
                onChange={(e) => {
                  if (e.target.checked) {
                    setOpen(true);
                  } else {
                    handleToggle();
                  }
                }}
              />
            }
          />
        </span>
      </Tooltip>

      <OpenProjectDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleToggle}
      />
    </>
  );
};

export default OpenSwitch;
