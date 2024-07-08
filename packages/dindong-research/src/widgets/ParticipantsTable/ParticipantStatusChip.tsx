import React from "react";
import Tag from "../Tag";
import { ExperimentAttendanceStatus } from "src/client";

//
//
//

interface ParticipantStatusChipProps {
  status: ExperimentAttendanceStatus;
}

//
//
//

const TAG_PROPS_MAP: Record<ExperimentAttendanceStatus, any> = {
  attended: {
    label: "참여",
    size: "small",
    color: "success",
  },
  notAttended: {
    label: "미참여",
    size: "small",
    color: "warning",
  },
  scheduled: {
    label: "예정",
    size: "small",
    color: "default",
  },
};

//
//
//

const ParticipantStatusChip: React.FC<ParticipantStatusChipProps> = ({
  status,
}) => {
  const tagProps = TAG_PROPS_MAP[status];

  return <Tag {...tagProps} />;
};

export default ParticipantStatusChip;
