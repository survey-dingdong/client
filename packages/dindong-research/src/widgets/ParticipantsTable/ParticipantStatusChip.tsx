import React from "react";
import Tag from "../Tag";
import { ExperimentAttendanceStatus } from "src/client";

interface ParticipantStatusChipProps {
  status: ExperimentAttendanceStatus;
}

const ParticipantStatusChip: React.FC<ParticipantStatusChipProps> = ({
  status,
}) => {
  switch (status) {
    case "attended":
      return <Tag label="참여" size="small" color="success" />;

    case "notAttended":
      return <Tag label="미참여" size="small" color="warning" />;

    default:
      return <Tag label="예정" size="small" color="default" />;
  }
};

export default ParticipantStatusChip;
