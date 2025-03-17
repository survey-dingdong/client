import { Stack, Typography } from "@mui/material";
import { ChatTag } from "../ChatTag";

const ChatListItem: React.FC = () => {
  return (
    <Stack padding={2} gap={1.5}>
      {/* status tag */}
      <span>
        <ChatTag />
      </span>

      {/* preview */}
      <Stack flexDirection="row" gap={2.5}>
        <Typography variant="label1Normal" flexGrow={1} noWrap>
          양다은 참여자님~ 참여해주신 실험에 대해 보상관련 안내 드립니다.
        </Typography>
        <Typography
          variant="label1Normal"
          fontWeight={400}
          color="textAssistive"
        >
          12:00
        </Typography>
      </Stack>

      {/* project title */}
      <Stack flexDirection="row" gap={1}>
        <Typography variant="caption2" fontWeight={400} flexGrow={1}>
          프로젝트 제목
        </Typography>
        <Stack
          width={14}
          height={14}
          borderRadius="50%"
          bgcolor="primary.main"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            sx={{ fontSize: 8, fontWeight: 400, color: "common.white" }}
            align="center"
          >
            1
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ChatListItem;
