import { Tag } from "@dingdong/design-system";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { DingdongDateCalendar } from "../components";

const ProjectDetail = () => {
  return (
    <>
      <Stack>
        {/* 썸네일 */}
        <Box component="img" sx={{ height: 211 }} alt="썸네일" />

        <Stack gap={2}>
          {/* 프로젝트 설명 */}
          <StyledProjectDetailCard>
            <Typography
              variant="headline1"
              sx={{ display: "inline-flex", gap: 2 }}
            >
              <span>
                <Tag label="대면" size="small" />
              </span>
              프로젝트 이름
            </Typography>
            <Typography variant="label2" color="text.tertiary">
              연구자 Admin에서 입력 가능한 max-length까지 풀 텍스트로 표시됨
            </Typography>
          </StyledProjectDetailCard>

          {/* 날짜 */}
          <StyledProjectDetailCard>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="headline2">참여 날짜 예약</Typography>
              <Typography variant="caption2" color="text.tertiary">
                2025.01.01
              </Typography>
            </Stack>

            {/* 캘린더 */}
            <DingdongDateCalendar />

            {/* 참여자 */}
            <Stack gap={1.5} pb={2.5}>
              <Typography variant="body2" color="text.secondary">
                실험 참여 시간을 선택해 주세요.
              </Typography>
              <Stack
                direction="row"
                gap={1}
                sx={{ overflow: "auto", mr: -2, scrollbarWidth: "none" }}
              >
                <Tag color="inherit" label="11:00 - 12:00" />
                <Tag color="inherit" label="12:00 - 13:00" />
                <Tag color="inherit" label="13:00 - 14:00" />
                <Tag color="inherit" label="14:00 - 15:00" />
                <Tag color="inherit" label="15:00 - 16:00" />
                <Tag color="inherit" label="16:00 - 17:00" />
                <Box sx={{ pl: 2 }} />
              </Stack>
            </Stack>
          </StyledProjectDetailCard>
        </Stack>
      </Stack>

      {/* 바텀시트 */}
      <Stack
        sx={{
          backgroundColor: "background.paper",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 20px",
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        <Button>예약하기</Button>
      </Stack>
    </>
  );
};

const StyledProjectDetailCard = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 2.5rem;
  gap: 1rem;
`;

export default ProjectDetail;
