import React from "react";
import Tag from "../Tag";
import { ExperimentAttendanceStatus } from "generated-client";

interface ParticipantStatusChipProps {
  status: ExperimentAttendanceStatus;
}

const ParticipantStatusChip: React.FC<ParticipantStatusChipProps> = ({
  status,
}) => {
  switch (status) {
    case ExperimentAttendanceStatus.Attended:
      return <Tag label="참여" size="small" color="success" />;

    case ExperimentAttendanceStatus.NotAttended:
      return <Tag label="미참여" size="small" color="warning" />;

    default:
      return <Tag label="예정" size="small" color="default" />;
  }
};

export default ParticipantStatusChip;
