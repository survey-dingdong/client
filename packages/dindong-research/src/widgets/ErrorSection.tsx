import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import errorImage from "src/assets/error.png";

//
//
//

interface ErrorSectionProps {
  reset: () => void;
}

//
//
//

const ErrorSection: React.FC<ErrorSectionProps> = ({ reset }) => {
  const router = useRouter();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ maxWidth: 400, width: "100%", height: "100%" }}
    >
      {/* Image */}

      <Image src={errorImage.src} width={200} height={200} alt="error" />

      {/* Description */}
      <Stack width="100%" alignItems="center">
        <Typography variant="h5">ERROR</Typography>
        <Typography>페이지를 찾을 수 없습니다.</Typography>
      </Stack>

      {/* Actions */}
      <Stack width="100%" flexDirection="row" gap={1} mt={4}>
        <Button fullWidth color="inherit" onClick={() => router.back()}>
          뒤로가기
        </Button>
        <Button fullWidth color="inherit" onClick={() => reset()}>
          새로고침
        </Button>
      </Stack>
    </Stack>
  );
};

export default ErrorSection;
