"use client";
import { Paper, Stack, Typography, Link as MuiLink } from "@mui/material";
import React from "react";
import { PRIVACY_ID, SERVICE_ID, SERVICE_TERMS } from "src/constants/terms";
import { ContentContainer, PrivacyPolicy } from "src/widgets";

//
//
//

export default function Page() {
  return (
    <ContentContainer maxWidth="lg">
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
          <MuiLink href={`#${SERVICE_ID}`}>서비스 이용 약관</MuiLink>
          <MuiLink href={`#${PRIVACY_ID}`}>개인정보 수집 및 이용 동의</MuiLink>
        </Stack>

        {/* term service */}
        <Stack gap={1}>
          <Typography id={SERVICE_ID} variant="body2" fontWeight={700}>
            서비스 이용 약관
          </Typography>
          <Stack
            sx={{
              padding: 3,
              backgroundColor: "background.default",
              borderRadius: 2,
              gap: 3,
            }}
          >
            {SERVICE_TERMS?.map(({ title, content }, index) => (
              <React.Fragment key={index}>
                <Typography fontWeight={700}>{`제 ${
                  index + 1
                } 장 ${title}`}</Typography>

                {content.map((term, termIndex) => (
                  <Stack key={termIndex} gap={0.5}>
                    <Typography variant="h5">{`제 ${term?.id} 조 (${term?.title})`}</Typography>
                    <Stack component="ol">
                      {typeof term?.content === "string" ? (
                        <Typography variant="body2">{term.content}</Typography>
                      ) : (
                        term?.content?.map((line, index) => {
                          if (typeof line === "string") {
                            return (
                              <Typography
                                key={index}
                                component="li"
                                variant="body2"
                              >
                                {line}
                              </Typography>
                            );
                          }

                          if (Array.isArray(line)) {
                            return (
                              <Stack component="ul" key={index}>
                                {line.map((l, index) => (
                                  <Typography
                                    component="li"
                                    key={index}
                                    variant="body2"
                                  >
                                    {l}
                                  </Typography>
                                ))}
                              </Stack>
                            );
                          }

                          return (
                            <Typography
                              component="li"
                              key={index}
                              variant="body2"
                            >
                              {line}
                            </Typography>
                          );
                        })
                      )}
                    </Stack>
                  </Stack>
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </Stack>

        {/* term privacy */}
        <Stack gap={1}>
          <Typography id={PRIVACY_ID} variant="body2" fontWeight={700}>
            개인정보 수집 및 이용 동의
          </Typography>
          <Stack
            sx={{
              padding: 3,
              backgroundColor: "background.default",
              borderRadius: 2,
              gap: 3,
            }}
          >
            <PrivacyPolicy />
          </Stack>
        </Stack>
      </Paper>
    </ContentContainer>
  );
}
