"use client";
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { headerHeight } from "src/shared/Header";
import { ChatListItem, SendNoticeAction, WriteNoticeAction } from "src/widgets";
import { ChatBubble } from "src/widgets/chat/ChatBubble";
import ChatInput from "src/widgets/chat/ChatInput/ChatInput";

const mockChat = [
  {
    userName: "윤종필",
    message: "안녕하세요. 시급 얼마인가요?",
    time: "10:00",
    profileUrl: "https://avatars.githubusercontent.com/u/77464058?v=4",
  },
  {
    userName: "김은성",
    message: "안녕하세요. 인터뷰 하고싶습니다. 일본인도 인터뷰 가능한가요?",
    time: "10:00",
    profileUrl: "https://avatars.githubusercontent.com/u/77464058?v=4",
    newChatCount: 3,
  },
  {
    userName: "양다은",
    message: "도대체 어디로 가야되는 건가요?",
    time: "10:00",
    profileUrl: "https://avatars.githubusercontent.com/u/77464058?v=4",
    newChatCount: 1,
  },
];

const mockChatDetail = [
  {
    date: "2024. 04. 01.",
    chats: [
      {
        type: "opponent",
        userName: "김은성",
        message: "안녕하세요!",
        time: "10:00",
      },
      {
        type: "me",
        message: "안녕하세요! 참여해주셔서 감사합니다.",
        time: "10:05",
      },
    ],
  },
];

export default function Page() {
  const [expandNotice, setExpandNotice] = React.useState<boolean>(false);

  const renderChatList = () => {
    return (
      <Stack
        p={3}
        gap={3}
        sx={{
          bgcolor: "background.paper",
        }}
      >
        {/* header */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">채팅 목록</Typography>
          <Box display="flex" gap={1.5}>
            <SendNoticeAction />
            <WriteNoticeAction />
          </Box>
        </Box>

        {/* chat list */}
        <List disablePadding>
          {mockChat.map((chat) => (
            <ChatListItem key={chat.userName} {...chat} />
          ))}
        </List>
      </Stack>
    );
  };

  const renderChatRoom = () => {
    return (
      <Stack>
        {/* header */}
        <Box p="30px 24px" bgcolor="background.paper">
          <Box display="flex" gap={3} alignItems="center">
            <Typography variant="h6" flexGrow={1}>
              김은성 참여자와의 대화
            </Typography>

            <span>
              <Button
                color="inherit"
                endIcon={
                  <i
                    style={{ fontSize: "inherit" }}
                    className="fa-solid fa-chevron-down"
                  />
                }
                onClick={() => setExpandNotice((prev) => !prev)}
              >
                공지사항 확인
              </Button>
            </span>
          </Box>
        </Box>
        <Divider flexItem />

        <Collapse in={expandNotice}>
          <Box p={3} bgcolor="background.paper">
            <OutlinedInput
              fullWidth
              readOnly
              multiline
              rows={3}
              value="공고문에 적힌 주소 304호가 공사중입니다. 303호로 와주세요!"
            />
          </Box>
          <Divider flexItem />
        </Collapse>

        {/* bubbles */}
        <Stack gap={3} p={3} flexGrow={1} bgcolor="#F8F8FB">
          {/* chat detail */}
          {mockChatDetail.map((chat) => (
            <Stack gap={3} key={chat.date} flexGrow={1}>
              {/* data */}
              <Typography variant="caption" textAlign="center">
                {chat.date}
              </Typography>

              {/* bubbles */}
              <Stack gap={1}>
                {chat.chats.map((chat, index) => (
                  <ChatBubble key={index} {...chat} />
                ))}
              </Stack>
            </Stack>
          ))}

          {/* input */}
          <ChatInput />
        </Stack>
      </Stack>
    );
  };

  return (
    <Stack
      display="grid"
      gridTemplateColumns="minmax(450px, 1fr) 1px 2fr"
      height={`calc(100vh - ${headerHeight}px)`}
      divider={<Divider orientation="vertical" />}
    >
      {/* chat list */}
      {renderChatList()}

      {/* chat room */}
      {renderChatRoom()}
    </Stack>
  );
}
