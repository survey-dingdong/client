"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { OauthProviderTypeEnum } from "@dingdong/api-client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { GoogleLoginButton, Spinner } from "src/widgets";

//
//
//

type ProviderType = OauthProviderTypeEnum | "dingdong";
type QueryType = {
  provider: ProviderType;
  email: string;
};

//
//
//

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = React.useState<QueryType>();

  React.useEffect(() => {
    if (!searchParams) {
      return;
    }

    const params: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    if (params.provider && params.email) {
      setQuery(params as QueryType);
    }
  }, [searchParams]);

  /**
   *
   */
  const getTitleAndDescription = () => {
    switch (query?.provider) {
      case "dingdong":
        return {
          title: "이미 가입된 계정 정보입니다",
          description: "아래 버튼을 클릭해 이메일/패스워드로 로그인 해주세요.",
        };

      case "google":
        return {
          title: "소셜 계정으로 로그인 해주세요",
          description:
            "소셜 로그인 기록이 있는 계정 정보를 입력하셨습니다. 아래 버튼을 클릭해 소셜 계정을 통해 로그인 해주세요.",
        };

      default:
        null;
    }
  };

  /**
   *
   */
  const renderCtxButton = () => {
    switch (query?.provider) {
      case "dingdong":
        return (
          <Button
            fullWidth
            onClick={() => router.push(`/?email=${query.email}`)}
          >
            이메일/패스워드로 로그인
          </Button>
        );

      case "google":
        return <GoogleLoginButton />;

      default:
        return null;
    }
  };

  const content = getTitleAndDescription();

  //
  //
  //

  if (!content) {
    return <Spinner />;
  }

  return (
    <Stack gap={3}>
      <Stack gap={0.5}>
        <Typography variant="h4">{content?.title}</Typography>
        <Typography variant="body2">{content?.description}</Typography>
      </Stack>

      <Box
        sx={{
          padding: "16px 24px",
          borderRadius: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography textAlign="center" variant="body2">
          {query?.email}
        </Typography>
      </Box>
      {renderCtxButton()}
    </Stack>
  );
}
