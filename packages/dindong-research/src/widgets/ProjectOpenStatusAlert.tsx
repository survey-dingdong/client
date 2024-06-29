import { Alert, AlertTitle, Button } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";

interface ProjectOpenStatusAlertProps {
  isOpened?: boolean;
  onClickButton?: () => void;
}

const ProjectOpenStatusAlert: React.FC<ProjectOpenStatusAlertProps> = ({
  isOpened,
  onClickButton,
}) => {
  if (isOpened === undefined) {
    return null;
  }

  return (
    <Alert
      icon={isOpened ? <CheckCircleOutlineRounded /> : <InfoOutlinedIcon />}
      severity={isOpened ? "success" : "info"}
      action={
        <Button
          size="small"
          variant="text"
          color="info"
          sx={{ fontWeight: 600 }}
          onClick={onClickButton}
        >
          {isOpened ? "비공개" : "공개"}하기
        </Button>
      }
    >
      <AlertTitle>
        현재 본 프로젝트는 서베이 플랫폼 내 {isOpened ? "공개" : "비공개"}
        상태입니다
      </AlertTitle>
      {isOpened
        ? "프로젝트 정보 공개 및 참여자 모집을 중단하고자 할 경우 비공개 상태로 전환해 주세요."
        : "프로젝트 참여자 모집을 진행하고자 할 경우 공개 상태로 전환해 주세요. 공개 설정 즉시 서베이 플랫폼에 게시되며, 참여자가 실험 시간을 예약할 수 있게됩니다."}
    </Alert>
  );
};

export default ProjectOpenStatusAlert;
