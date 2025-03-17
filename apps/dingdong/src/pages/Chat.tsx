import React from "react";
import { ChatListItem, ContentLayout, DefaultHeader } from "../components";
import { Divider, Stack } from "@mui/material";

const Chat: React.FC = () => {
  return (
    <>
      <DefaultHeader title="채팅" />
      <ContentLayout>
        <Stack divider={<Divider />}>
          {[0, 1, 2].map((item) => (
            <ChatListItem key={item} />
          ))}
        </Stack>
      </ContentLayout>
    </>
  );
};

export default Chat;
