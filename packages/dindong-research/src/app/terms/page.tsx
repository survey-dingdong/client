// "use client";
import { Paper, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import React from "react";
import { SERVICE_TERMS } from "src/constants/terms";
import { ContentContainer } from "src/widgets";

//
//
//

export const SERVICE_HREF = "#service";
export const PRIVACY_HREF = "#privacy";

//
//
//

export default function Page() {
  return (
    <ContentContainer>
      <Paper
        sx={{ padding: 5, borderRadius: 3, gap: 3 }}
        component={Stack}
        elevation={0}
      >
        {/*  */}
        <Stack gap={0.5}>
          <Typography variant="h4">이용약관</Typography>
          <Typography variant="body1" whiteSpace="pre-wrap">
            {`딩동 서비스 이용약관은 다음과 같은 내용을 담고 있습니다.\n[부칙] 본 이용약관은 2024년 7월 1부터 적용됩니다.`}
          </Typography>
        </Stack>

        {/* index */}
        <Stack gap={1}>
          <MuiLink component={Link} href={SERVICE_HREF}>
            서비스 이용 약관
          </MuiLink>
          <MuiLink component={Link} href="#privacy">
            개인정보 수집 및 이용 동의
          </MuiLink>
        </Stack>

        {/* content */}
        <Stack gap={1}>
          <Typography id={SERVICE_HREF} variant="body2" fontWeight={700}>
            서비스 이용 약관
          </Typography>
          <Stack
            sx={{
              padding: 3,
              backgroundColor: "background.default",
              borderRadius: 2,
            }}
          >
            {SERVICE_TERMS?.map(({ title, content }, index) => (
              <React.Fragment key={index}>
                <Typography>{title}</Typography>
                {content.map((term, index) => (
                  <Stack component="ol" key={index}>
                    <Typography variant="h6">{term?.title}</Typography>
                    {typeof term?.content === "string" ? (
                      <Typography>{term.content}</Typography>
                    ) : (
                      term?.content?.map((line, index) => {
                        if (typeof line === "string") {
                          return (
                            <Typography key={index} component="li">
                              {line}
                            </Typography>
                          );
                        }

                        if (Array.isArray(line)) {
                          return (
                            <Stack component="ul" key={index}>
                              {line.map((l, index) => (
                                <Typography component="li" key={index}>
                                  {l}
                                </Typography>
                              ))}
                            </Stack>
                          );
                        }

                        return (
                          <Typography component="li" key={index}>
                            {line}
                          </Typography>
                        );
                      })
                    )}
                  </Stack>
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </ContentContainer>
  );
}
