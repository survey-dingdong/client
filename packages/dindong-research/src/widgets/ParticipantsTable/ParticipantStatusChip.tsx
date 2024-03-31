import { Chip } from "@mui/material";
import React from "react";

interface ParticipantStatusChipProps {
  status: string;
}

const ParticipantStatusChip: React.FC<ParticipantStatusChipProps> = ({
  status,
}) => {
  switch (status) {
    case "done":
      return <Chip label="참여" size="small" color="success" />;

    case "absent":
      return <Chip label="미참여" size="small" color="warning" />;

    default:
      return <Chip label="예정" size="small" color="default" />;
  }
};

export default ParticipantStatusChip;
