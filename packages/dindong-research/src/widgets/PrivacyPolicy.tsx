"use client";
import { Stack, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Stack gap={3}>
      {/*  */}
      <Stack gap={0.5}>
        <Typography variant="h5">1. 개인정보의 수집 및 이용목적</Typography>
        <Typography>
          서비스 공급자(딩동)는 다음과 같은 목적으로 개인정보를 처리합니다.
          처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
          이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의
          동의를 받는 등 필요한 조치를 이행할 예정입니다. 회원가입, 회원관리,
          본인 확인, 개인 식별, 비인가 사용 방지, 회원탈퇴
        </Typography>
      </Stack>

      {/*  */}
      <Stack>
        <Typography variant="h5">
          2. 수집하는 개인정보의 항목 및 수집방법
        </Typography>
        <Typography>
          서비스 공급자(딩동)는 최초 회원가입 시 서비스 제공을 원활하게 하기
          위해 필요한 최소한의 정보만을 수집하고 있으며, 마케팅에 필요한 정보를
          추가로 수집할 수 있습니다.
        </Typography>

        {/* 가 */}
        <Typography variant="h6" fontWeight={500} sx={{ marginTop: 3 }}>
          가. 수집하는 개인정보의 항목
        </Typography>
        <Typography>
          첫째, 서비스 공급자(딩동)는 회원가입, 서비스 신청 및 제공, 서비스 상담
          및 마케팅 정보 요청을 위해 아래와 같은 최소한의 개인정보를 필수
          항목으로 수집합니다.
        </Typography>
        <Typography fontWeight={700}>[필수 항목]</Typography>
        <ul>
          <Typography component="li" sx={{ pl: 2 }}>
            회원가입, 서비스 신청 및 제공 시: 이름 또는 닉네임, 이메일,
            비밀번호, 휴대폰번호
          </Typography>
        </ul>

        <Typography sx={{ mt: 3 }}>
          둘째, 서비스 공급자(딩동)는 이용자의 추가 동의 및 입력을 통해 아래
          항목을 수집합니다.
        </Typography>
        <Typography fontWeight={700}>[선택 항목]</Typography>
        <ul>
          <Typography component="li">마케팅 정보 요청 시: 이메일</Typography>
        </ul>

        {/* 나 */}
        <Typography variant="h6" fontWeight={500} sx={{ marginTop: 3 }}>
          나. 개인정보 수집 방법
        </Typography>
        <Stack component="ul">
          <Typography component="li">
            회원가입 시 또는 서비스 이용 과정에서 이용자의 동의 및 자발적인
            제공을 통하여 수집합니다.
          </Typography>
          <Typography component="li">
            뉴스레터, 마케팅 정보 발신 등을 위하여 별도의 동의절차를 거쳐
            수집합니다.
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="h5">3. 개인정보의 보유 및 이용 기간</Typography>
        <Stack component="ul">
          <Typography component="li">
            서비스 공급자(딩동)는 법령에 따른 개인정보 보유∙이용기간 또는 정보
            주체로부터 개인정보 수집 시에 동의 받은 보유∙이용기간 내에서
            개인정보를 처리∙보유합니다.
          </Typography>
          <Typography component="li">
            서비스 공급자(딩동)는 원칙적으로 개인정보 수집 및 이용목적이 달성된
            후에는 해당 정보를 지체 없이 파기합니다.
          </Typography>
          <Typography component="li">
            서비스 공급자(딩동)가 원칙적으로 회원이 개인정보의 수집 및 이용에
            대한 동의를 철회하는 경우 회원의 개인정보를 지체없이 파기합니다.
          </Typography>
          <Typography component="li">
            보유기간을 미리 공지하고 그 보유기간이 경과하지 아니한 경우와
            개별적으로 동의를 받은 경우에는 약정한 기간 동안 보유합니다.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PrivacyPolicy;
