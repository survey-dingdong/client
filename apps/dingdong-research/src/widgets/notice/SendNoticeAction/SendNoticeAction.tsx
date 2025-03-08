"use client";
import { Icon } from "@dingdong/design-system";
import { CheckBoxOutlineBlank, ExpandMoreRounded } from "@mui/icons-material";
import {
  Alert,
  alertClasses,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const userListHeight = 60 * 4;

const mockData = [
  { id: 1, name: "김은성" },
  {
    id: 2,
    name: "윤종필",
  },
  {
    id: 3,
    name: "양다은",
  },
  {
    id: 4,
    name: "김은성",
  },
  {
    id: 5,
    name: "윤종필",
  },
  {
    id: 6,
    name: "양다은",
  },
  {
    id: 7,
    name: "김은성",
  },
];

const SendNoticeDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const [selectedUsers, setSelectedUsers] = React.useState<number[]>([]);

  const isAllSelected = selectedUsers.length === mockData.length;

  const handleSelectUser = (id: number) => {
    setSelectedUsers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevId) => prevId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <Box>
      {/* Dialog */}
      <Dialog
        fullWidth
        open={open}
        maxWidth="sm"
        onClose={() => setOpen(false)}
      >
        <DialogTitle>공지사항 전송하기</DialogTitle>
        <DialogContent>
          <Stack gap={3}>
            {/* notice input */}
            <Card variant="outlined">
              <CardHeader
                title="작성된 공지사항 확인하기"
                titleTypographyProps={{ variant: "body1" }}
                action={<ExpandMoreRounded />}
                sx={{ cursor: "pointer" }}
                onClick={() => setExpanded((prev) => !prev)}
              />

              <Collapse in={expanded}>
                <CardContent sx={{ pt: 0 }}>
                  <TextField
                    multiline
                    fullWidth
                    rows={3}
                    InputProps={{
                      readOnly: true,
                    }}
                    value="공고문에 적힌 주소 304호가 공사중입니다. 303호로 와주세요!"
                  />
                </CardContent>
              </Collapse>
            </Card>

            {/* select user */}
            <Stack gap={1}>
              <Stack>
                <FormLabel required>전송 대상 선택</FormLabel>
                <Typography variant="body2" color="text.secondary">
                  공지사항을 전송할 참여자를 선택해 주세요. 공지는 채팅방으로
                  전송됩니다.
                </Typography>
              </Stack>

              {/* selected user alert */}
              <Alert
                severity="info"
                sx={{
                  alignItems: "center",
                  [`& .${alertClasses.message}`]: {
                    fontWeight: 700,
                    color: (theme) => theme.palette.info.main,
                  },
                  borderRadius: 2,
                  border: `1px solid #4577D880`,
                  height: 48,
                }}
                action={
                  <Button
                    color="info"
                    size="small"
                    variant="text"
                    sx={{ fontWeight: 600, p: "5px 12px" }}
                    onClick={() =>
                      isAllSelected
                        ? setSelectedUsers([])
                        : setSelectedUsers(mockData.map(({ id }) => id))
                    }
                  >
                    {isAllSelected ? "모두 해제" : "모두 선택"}
                  </Button>
                }
              >
                전체 {mockData.length}명 중 {selectedUsers.length}명 선택
              </Alert>

              {/* user list */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body2" fontWeight={700} sx={{ mb: 1 }}>
                    전체 5명
                  </Typography>
                  <TextField fullWidth placeholder="참여자 닉네임으로 검색" />
                  <List
                    sx={{
                      maxHeight: `${userListHeight}px`,
                      overflowY: "scroll",
                    }}
                  >
                    {mockData.map(({ name, id }) => (
                      <ListItem disablePadding key={id}>
                        <ListItemButton
                          sx={{ borderRadius: 1 }}
                          selected={selectedUsers.includes(id)}
                          onClick={() => handleSelectUser(id)}
                        >
                          <Checkbox
                            checked={selectedUsers.includes(id)}
                            size="small"
                          />
                          <ListItemAvatar>
                            <Avatar />
                          </ListItemAvatar>
                          <ListItemText
                            primary={name}
                            primaryTypographyProps={{ fontWeight: 700 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </DialogContent>

        {/* actions */}
        <DialogActions>
          <Button color="inherit" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button>전송</Button>
        </DialogActions>
      </Dialog>

      {/* button */}
      <Button
        color="inherit"
        startIcon={<Icon icon="upload" size="small" />}
        onClick={() => setOpen(true)}
      >
        공지 전송
      </Button>
    </Box>
  );
};

export default SendNoticeDialog;
