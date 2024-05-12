"use client";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import Link from "next/link";
import React from "react";

//
//
//

export default function Page() {
  const [checked, setChecked] = React.useState({
    age: false,
    dingdong: false,
    privacy: false,
  });

  const allChecked = checked.age && checked.dingdong && checked.privacy;

  return (
    <>
      <Stack gap={1}>
        <FormControlLabel
          label="약관 전체 동의하기"
          control={
            <Checkbox
              checked={allChecked}
              icon={<CheckCircle color="primary" sx={{ opacity: 0.3 }} />}
              checkedIcon={<CheckCircle color="primary" />}
              onChange={(e, value) =>
                setChecked({
                  age: e.target.checked,
                  dingdong: e.target.checked,
                  privacy: e.target.checked,
                })
              }
            />
          }
        />

        <Stack component="ul" sx={{ p: 0 }}>
          <CheckboxItem
            checked={checked.age}
            label="[필수] 만 14세 이상입니다."
            link="/terms/age"
            onChange={(_, value) => setChecked({ ...checked, age: value })}
          />
          <CheckboxItem
            checked={checked.dingdong}
            label="[필수] 딩동 이용 약관"
            link="/terms/dingdong"
            onChange={(_, value) => setChecked({ ...checked, dingdong: value })}
          />
          <CheckboxItem
            checked={checked.privacy}
            label="[필수] 개인정보 수집 및 이용 동의"
            link="/terms/privacy"
            onChange={(_, value) => setChecked({ ...checked, privacy: value })}
          />
        </Stack>
      </Stack>

      <Button disabled={!allChecked} LinkComponent={Link} href="/signup/form">
        본인 인증
      </Button>
    </>
  );
}

type CheckboxItemProps = Omit<FormControlLabelProps, "control"> & {
  link: string;
  checked?: boolean;
  onChange?: CheckboxProps["onChange"];
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  link,
  checked,
  onChange,
  ...props
}) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <FormControlLabel
        {...props}
        control={<Checkbox checked={checked} onChange={onChange} />}
      />
      <MuiLink component={Link} href={link} color="text.primary">
        자세히
      </MuiLink>
    </Box>
  );
};
