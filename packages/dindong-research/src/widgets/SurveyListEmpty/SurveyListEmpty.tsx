import React from "react";
import CreateProjectAction from "../CreateProjectAction/CreateProjectAction";
import { Empty } from "src/shared";

interface SurveyListEmptyProps {
  workspaceId: number;
}

const SurveyListEmpty: React.FC<SurveyListEmptyProps> = ({ workspaceId }) => {
  return (
    <Empty
      title="생성된 실험 프로젝트가 없습니다"
      description="아래 버튼을 클릭하여 프로젝트를 만들어 보세요."
      action={<CreateProjectAction workspaceId={workspaceId} />}
    />
  );
};

export default SurveyListEmpty;
