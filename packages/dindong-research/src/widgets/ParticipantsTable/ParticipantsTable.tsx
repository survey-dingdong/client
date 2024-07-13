"use client";
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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  inputBaseClasses,
} from "@mui/material";
import React from "react";
import ParticipantStatusChip from "./ParticipantStatusChip";
import Link from "next/link";
import { usePath } from "src/hooks/usePath";
import { GetExperimentParticipantResponse } from "src/client";
import dayjs from "dayjs";

//
//
//

const heads = ["닉네임", "예약 일시", "참여 여부", ""];

const ATTENDANCE_STATUS_LABEL: Record<
  any,
  // ExperimentAttendanceStatusTypeEnum,
  string
> = {
  attended: "참여",
  not_attended: "미참여",
  scheduled: "예정",
};

//
//
//

interface formatExperimentDateTimeParams {
  experimentDate: string;
  startTime: string;
  endTime: string;
}

function formatExperimentDateTime({
  experimentDate,
  startTime,
  endTime,
}: formatExperimentDateTimeParams) {
  const startDateTime = dayjs(
    `${experimentDate} ${startTime}`,
    "YYYY-MM-DD HH:mm:ss"
  );
  const endDateTime = dayjs(
    `${experimentDate} ${endTime}`,
    "YYYY-MM-DD HH:mm:ss"
  );

  // 원하는 포맷으로 변환
  const formattedDate = startDateTime.format("YYYY. MM. DD.");
  const formattedStartTime = startDateTime.format("h:mmA");
  const formattedEndTime = endDateTime.format("h:mmA");

  return `${formattedDate} ${formattedStartTime} ~ ${formattedEndTime}`;
}

//
//
//

interface ParticipantsTableProps {
  participants: GetExperimentParticipantResponse[];
}

//
//
//

const ParticipantsTable: React.FC<ParticipantsTableProps> = ({
  participants,
}) => {
  const [dialogType, setDialogType] = React.useState<"delete" | "info" | null>(
    null
  );

  const chatPath = usePath({ type: "project", slug: "/chat" });

  /**
   *
   */
  const renderDeleteDialog = () => {
    return (
      <Dialog
        open={dialogType === "delete"}
        onClose={() => setDialogType(null)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>참여자 삭제</DialogTitle>
        <DialogContent>
          <Typography>
            해당 참여자를 실험 프로젝트에서 삭제합니다. 실험 참여를 완료한
            참여자의 경우 모바일 앱을 통해 기록을 확인할 수 있습니다.
            계속하시겠습니까?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setDialogType(null)}>
            취소
          </Button>
          <Button color="error" onClick={() => setDialogType(null)}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderInfoDialog = () => {
    return (
      <Dialog
        open={dialogType === "info"}
        onClose={() => setDialogType(null)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>참여자 정보</DialogTitle>
        <DialogContent>
          <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <ParticipantInfoListItem
              content="daeun.yang@elicer.com"
              icon={<i className="fa-solid fa-envelope" />}
            />
            <ParticipantInfoListItem
              content="010-3242-0000"
              icon={<i className="fa-solid fa-phone" />}
            />
          </List>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setDialogType(null)}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const handleAttendanceStatusChange = (newStatus: string) => {
    //  TODO: 참여 여부 변경
  };

  //
  //
  //

  return (
    <>
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
            {participants.map((participant) => (
              <TableRow key={participant.id}>
                <TableCell>{participant.username}</TableCell>
                <TableCell>
                  {formatExperimentDateTime({
                    experimentDate: participant.experimentDate,
                    startTime: participant.startTime,
                    endTime: participant.endTime,
                  })}
                </TableCell>
                <TableCell>
                  <Select
                    value={participant.attendanceStatus}
                    renderValue={(value) => (
                      <ParticipantStatusChip status={value as any} />
                    )}
                    sx={{
                      fieldset: {
                        border: "none",
                      },
                      [`&.${inputBaseClasses.root}`]: {
                        backgroundColor: "inherit",
                      },
                    }}
                    onChange={(e) => {
                      handleAttendanceStatusChange(e.target.value);
                    }}
                  >
                    {Object.entries(ATTENDANCE_STATUS_LABEL).map(
                      ([status, label]) => (
                        <MenuItem key={status} value={status}>
                          <FormControlLabel
                            label={label}
                            control={
                              <Radio
                                checked={
                                  participant.attendanceStatus === status
                                }
                              />
                            }
                          />
                        </MenuItem>
                      )
                    )}
                  </Select>
                </TableCell>
                <TableCell>
                  <Box display="flex" gap={2}>
                    {/* chat */}
                    <Tooltip title="채팅으로 이동">
                      <IconButton
                        size="small"
                        LinkComponent={Link}
                        href={chatPath}
                      >
                        <i className="fa-regular fa-comment-dots" />
                      </IconButton>
                    </Tooltip>

                    {/* information */}
                    <Tooltip title="참여자 정보">
                      <IconButton
                        size="small"
                        onClick={() => setDialogType("info")}
                      >
                        <i className="fa-regular fa-user"></i>
                      </IconButton>
                    </Tooltip>

                    {/* delete */}
                    <Tooltip title="참여자 삭제">
                      <IconButton
                        size="small"
                        onClick={() => setDialogType("delete")}
                      >
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
      {/* dialogs */}
      {renderDeleteDialog()}
      {renderInfoDialog()}
    </>
  );
};

const ParticipantInfoListItem = ({
  content,
  icon,
}: {
  content: string;
  icon: React.ReactNode;
}) => {
  return (
    <ListItem
      sx={{
        p: 2,
        bgcolor: "background.default",
        borderRadius: 2,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        "* i": {
          color: (theme) => theme.palette.text.primary,
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ fontSize: "14px" }}
        primary={content}
      />
    </ListItem>
  );
};

export default ParticipantsTable;
