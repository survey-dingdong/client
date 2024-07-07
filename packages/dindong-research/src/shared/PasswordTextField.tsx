import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { _TextFieldProps, TextField } from "./TextField";

export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_]).{8,20}$/;

export const PASSWORD_HELPER_TEXT =
  "영문(대문자 포함), 숫자/특수문자 조합 8자 이상 입력";

//
//
//

export const PasswordTextField: React.FC<_TextFieldProps> = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  //
  //
  //

  return (
    <TextField
      {...props}
      type={passwordVisible ? "text" : "password"}
      placeholder={props.placeholder ?? "비밀번호를 입력해주세요."}
      error={props.error}
      endAdornment={
        props.endAdornment ?? (
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
        )
      }
    />
  );
};
