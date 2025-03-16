import React from "react";
import { ContentLayout, DefaultHeader, Header } from "../components";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { ExperimentAttendanceStatusTypeEnum } from "@dingdong/api-client";
import { Empty } from "@dingdong/design-system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";

const MyProject = () => {
  const navigate = useNavigate();

  const [tab, setTab] = React.useState<ExperimentAttendanceStatusTypeEnum>(
    ExperimentAttendanceStatusTypeEnum.scheduled
  );

  const renderEmptyPage = () => {
    switch (tab) {
      case ExperimentAttendanceStatusTypeEnum.scheduled:
        return (
          <Empty
            title="예약 및 예정된 실험 공고가 없습니다"
            action={
              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/project")}
              >
                실험 공고 살펴보기
              </Button>
            }
          />
        );

      case ExperimentAttendanceStatusTypeEnum.attended:
        return (
          <Empty
            title="참여 진행 중인 실험 공고가 없습니다"
            description={`30분 이내로 참여가 예정된 실험 공고만\n이 곳에 나타나요.`}
          />
        );

      case ExperimentAttendanceStatusTypeEnum.notAttended:
        return <Empty title="참여 완료된 실험 공고가 없습니다" />;
    }
  };

  const renderTabs = () => {
    return (
      <Box sx={{ backgroundColor: "background.paper" }}>
        <Tabs
          variant="fullWidth"
          value={tab}
          onChange={(_, value) => setTab(value)}
        >
          <Tab
            value={ExperimentAttendanceStatusTypeEnum.scheduled}
            label="예정됨"
          />
          <Tab
            value={ExperimentAttendanceStatusTypeEnum.attended}
            label="진행중"
          />
          <Tab
            value={ExperimentAttendanceStatusTypeEnum.notAttended}
            label="완료됨"
          />
        </Tabs>
      </Box>
    );
  };

  //
  //
  //

  return (
    <>
      <DefaultHeader title="참여관리" rightAction={<Header.SettingButton />} />
      <ContentLayout>
        {renderTabs()}
        {renderEmptyPage()}
      </ContentLayout>
    </>
  );
};

export default MyProject;
