"use client";
import { FormControlLabel, Switch, Tooltip } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CustomSwitch from "./CustomSwitch";

//
//
//

interface OpenSwitchProps {
  disabled?: boolean;
  isPublic?: boolean;
  onToggle: () => void;
}

//
//
//

const OpenSwitch: React.FC<OpenSwitchProps> = ({ disabled, onToggle }) => {
  const { control } = useFormContext();

  //
  //
  //

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
          <Controller
            name="isPublic"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                {...field}
                labelPlacement="start"
                disabled={disabled}
                label="서베이 플랫폼에 공개하기"
                slotProps={{
                  typography: {
                    variant: "body1",
                  },
                }}
                control={
                  <CustomSwitch checked={field.value} onChange={onToggle} />
                }
              />
            )}
          />
        </span>
      </Tooltip>
    </>
  );
};

export default OpenSwitch;
