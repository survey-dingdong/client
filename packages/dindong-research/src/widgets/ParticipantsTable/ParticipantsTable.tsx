import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import ParticipantStatusChip from "./ParticipantStatusChip";

const heads = ["이름", "예약 일시", "참여 여부", ""];

const mockData = [
  {
    name: "김철수",
    reservedAt: "2021-10-10 10:00",
    isParticipated: true,
  },
];

const ParticipantsTable = () => {
  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      elevation={0}
      sx={{ borderRadius: 4 }}
    >
      <Table>
        {/* head */}
        <TableHead>
          <TableRow>
            {heads.map((head) => (
              <TableCell key={head}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* body */}
        <TableBody>
          {/* mock */}
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>김철수</TableCell>
              <TableCell>2021-10-10 10:00</TableCell>
              <TableCell>
                <ParticipantStatusChip
                  status={
                    index === 1 ? "done" : index === 0 ? "absent" : "planned"
                  }
                />
              </TableCell>
              <TableCell>
                <Box display="flex" gap={2}>
                  {/* chat */}
                  <Tooltip title="채팅으로 이동">
                    <IconButton size="small">
                      <i className="fa-regular fa-comment-dots"></i>
                    </IconButton>
                  </Tooltip>

                  {/* information */}
                  <Tooltip title="참여자 정보">
                    <IconButton size="small">
                      <i className="fa-regular fa-user"></i>
                    </IconButton>
                  </Tooltip>

                  {/* delete */}
                  <Tooltip title="참여가 완료된 참여자는 삭제할 수 없습니다.">
                    <IconButton size="small">
                      <i className="fa-regular fa-circle-xmark"></i>
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantsTable;
