import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { _TextFieldProps, TextField } from "./TextField";

export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_]).{8,20}$/;

export const passwordMessage =
  "영문(대문자 포함), 숫자 및 특수문자의 조합으로 8자 이상 입력해 주세요.";

export const PasswordTextField: React.FC<_TextFieldProps> = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  //
  //
  //

  return (
    <TextField
      type={passwordVisible ? "text" : "password"}
      placeholder="비밀번호를 입력해주세요."
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            size="small"
            onClick={() => setPasswordVisible((prev) => !prev)}
          >
            {passwordVisible ? (
              <i className="fa-regular fa-eye" />
            ) : (
              <i className="fa-regular fa-eye-slash" />
            )}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
