"use client";
import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "public/logo.png";
import Image from "next/image";

import thumbnail from "public/thumbnail.png";
import textLogo from "public/dindong_font.png";

//
//
//

export const ThumbnailLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) => {
  const [gridTemplateColumns, setGridTemplateColumns] =
    React.useState("560px 1fr");

  const theme = useTheme();
  const isLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    if (!isLargerThanMd) {
      setGridTemplateColumns("1fr");
    } else {
      setGridTemplateColumns("560px 1fr");
    }
  }, [isLargerThanMd]);

  //
  //
  //

  return (
    <Box
      display="grid"
      gridTemplateColumns={gridTemplateColumns}
      height="100vh"
    >
      <Stack p="80px 44px 44px 44px" gap={3}>
        <Image src={logo.src} width={114} height={20} alt="logo" />
        {title && description ? (
          <Stack gap={0.5}>
            {title ? (
              <Typography variant="h4" whiteSpace="pre-wrap">
                {title}
              </Typography>
            ) : null}
            {description ? (
              <Typography
                variant="body2"
                color="text.secondary"
                whiteSpace="pre-wrap"
              >
                {description}
              </Typography>
            ) : null}
          </Stack>
        ) : null}

        {children}
      </Stack>

      {isLargerThanMd ? (
        // thumbnail
        <Box
          width="100%"
          height="100%"
          position="relative"
          sx={{
            p: {
              color: (theme) => theme.palette.common.white,
              zIndex: 1,
            },
          }}
        >
          {/* logo and description */}
          {isLargerThanLg ? (
            <Stack
              gap={2}
              sx={{
                zIndex: 1,
                position: "absolute",
                bottom: 62,
                left: 62,
              }}
            >
              <Image
                src={textLogo.src}
                priority
                width={283}
                height={40}
                alt="dingdong"
              />
              <Typography
                variant="body2"
                color={(theme) => theme.palette.common.white}
                whiteSpace="pre-wrap"
                fontWeight={400}
                sx={{ pr: 12 }}
              >
                {`딩동(DING DONG)은 연구자와 실험 참여자를 연결하는 실험 빌드 및 참여 서비스를 제공하는 플랫폼입니다.\n신뢰할 수 있는 사용자 데이터를 확보하여 양질의 연구를 수행해 보세요!`}
              </Typography>
            </Stack>
          ) : null}

          {/* vertical description */}
          <Box
            sx={{
              position: "absolute",
              top: 70,
              right: 70,
              zIndex: 1,
              bottom: 70,
            }}
          >
            <Stack
              gap={3}
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                fontWeight={500}
                color={(theme) => theme.palette.common.white}
                sx={{
                  writingMode: "vertical-lr",
                  whiteSpace: "nowrap",
                }}
              >
                Reliable Experiment Data
              </Typography>
              <Box
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 51%)",
                  width: "1px",
                  height: "100%",
                }}
              />
            </Stack>
          </Box>

          {/* background image  */}
          <Image
            src={thumbnail.src}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      ) : null}
    </Box>
  );
};
