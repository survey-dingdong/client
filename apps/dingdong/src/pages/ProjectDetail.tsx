import { Tag } from "@dingdong/design-system";
import { Box, Stack, styled, Typography } from "@mui/material";
import { DingdongDateCalendar } from "../components";

const ProjectDetail = () => {
  return (
    <Stack>
      <Box component="image" sx={{ height: 211 }} />
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

          <DingdongDateCalendar />
        </StyledProjectDetailCard>
      </Stack>
    </Stack>
  );
};

const StyledProjectDetailCard = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(2.5)};
  gap: ${({ theme }) => theme.spacing(2)};
`;

export default ProjectDetail;
