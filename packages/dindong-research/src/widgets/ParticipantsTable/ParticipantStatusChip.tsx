import React from "react";
import Tag from "../Tag";

interface ParticipantStatusChipProps {
  status: string;
}

const ParticipantStatusChip: React.FC<ParticipantStatusChipProps> = ({
  status,
}) => {
  switch (status) {
    case "done":
      return <Tag label="참여" size="small" color="success" />;

    case "absent":
      return <Tag label="미참여" size="small" color="warning" />;

    default:
      return <Tag label="예정" size="small" color="default" />;
  }
};

export default ParticipantStatusChip;
