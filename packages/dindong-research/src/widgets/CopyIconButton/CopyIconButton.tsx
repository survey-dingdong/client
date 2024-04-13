"use client";
import { Box, Tooltip } from "@mui/material";
import React from "react";
import { useSnackbar } from "notistack";

interface CopyIconButtonProps {
  content: string;
}

const CopyIconButton: React.FC<CopyIconButtonProps> = ({ content }) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <Tooltip title="복사">
        <Box
          borderRadius="50%"
          width={34}
          height={34}
          bgcolor="#EAEDF3"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigator.clipboard.writeText(content).then(
              () => {
                enqueueSnackbar("에러가 발생했습니다. 다시 시도해 주세요.", {
                  variant: "error",
                });
                enqueueSnackbar("복사를 완료했습니다.", {
                  variant: "success",
                });
              },
              () => {}
            );
          }}
        >
          <i className="fa-solid fa-copy" />
        </Box>
      </Tooltip>
    </>
  );
};

export default CopyIconButton;
