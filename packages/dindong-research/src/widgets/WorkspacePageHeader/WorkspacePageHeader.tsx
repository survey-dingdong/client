import PageHeader from "src/shared/PageHeader";
import React from "react";

const SurveyListPageHeader = () => {
  return (
    <PageHeader
      title="실험 프로젝트"
      description="실험 프로젝트 생성 및 진행 상황을 관리할 수 있습니다. 공개된 프로젝트는 {참여자 플랫폼: APP}에 나타납니다."
    />
  );
};

export default SurveyListPageHeader;
