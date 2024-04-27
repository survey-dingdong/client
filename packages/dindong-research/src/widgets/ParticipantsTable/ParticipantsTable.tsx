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
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import ParticipantStatusChip from "./ParticipantStatusChip";
import Link from "next/link";

const heads = ["이름", "예약 일시", "참여 여부", ""];

const ParticipantsTable = () => {
  const [dialogType, setDialogType] = React.useState<"delete" | "info" | null>(
    null
  );

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
              icon={<i className="fa-solid fa-envelope" />}
            >
              <Typography>daeun.yang@elicer.com</Typography>
            </ParticipantInfoListItem>
            <ParticipantInfoListItem icon={<i className="fa-solid fa-phone" />}>
              <Typography>010-3242-0141</Typography>
            </ParticipantInfoListItem>
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
                      <IconButton
                        size="small"
                        LinkComponent={Link}
                        href={`/project/1/chat`}
                        // href={`/project/${projectId}/chat`}
                      >
                        <i className="fa-regular fa-comment-dots"></i>
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
  children,
  icon,
}: {
  children: React.ReactNode;
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
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};

export default ParticipantsTable;
