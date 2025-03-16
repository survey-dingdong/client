import { Tag } from "@dingdong/design-system";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Stack,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import {
  ContentLayout,
  DefaultHeader,
  DingdongDateCalendar,
  Header,
} from "../components";
import { useState } from "react";
import { Dayjs } from "dayjs";
import CheckCircle from "@mui/icons-material/CheckCircle";

const Puller = styled("div")(({ theme }) => ({
  width: 70,
  height: 6,
  backgroundColor: theme.palette.divider,
  borderRadius: 3,
}));

const ProjectDetail = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>();
  const [showSuccessDrawer, setShowSuccessDrawer] = useState(false);

  const renderSuccessDrawer = () => {
    return (
      <SwipeableDrawer
        anchor="bottom"
        open={showSuccessDrawer}
        slotProps={{
          paper: {
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            },
          },
        }}
        onClose={() => setShowSuccessDrawer(false)}
        onOpen={() => setShowSuccessDrawer(true)}
      >
        <Stack p={2} alignItems="center">
          <Puller />
        </Stack>
        <Stack sx={{ p: 2, gap: 2 }}>
          <Stack gap={1.5} alignItems="center">
            <CheckCircle sx={{ color: "success.main", fontSize: 64 }} />
            <Typography variant="headline1" fontWeight={600}>
              실험 참여 예약이 완료되었어요!
            </Typography>
          </Stack>
          <Stack
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              p: 2,
              gap: 1.5,
              borderRadius: 1.5,
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary" fontWeight={600}>
              프로젝트 명
            </Typography>

            <Typography variant="label2" color="text.tertiary">
              24년 12월 5일 11:00 - 11:30
            </Typography>
            <Typography variant="label2" color="text.tertiary">
              24년 12월 5일 11:00 - 11:30
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ p: 2 }}>
          <Button>예약 관리</Button>
        </Stack>
      </SwipeableDrawer>
    );
  };

  return (
    <>
      <DefaultHeader
        leftAction={<Header.BackButton />}
        rightAction={<Header.ShareButton />}
      />
      <ContentLayout>
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
              <DingdongDateCalendar
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />

              {/* 참여자 */}
              <Stack pb={2.5} gap={2}>
                <Stack gap={1.5}>
                  <Typography variant="body2" color="text.secondary">
                    실험 참여 시간을 선택해 주세요.
                  </Typography>
                  <Stack
                    direction="row"
                    gap={1}
                    sx={{ overflow: "auto", mr: -2.5, scrollbarWidth: "none" }}
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

                <Alert
                  severity="info"
                  action={<Button variant="text">초기화</Button>}
                >
                  <AlertTitle>참여 시간 선택</AlertTitle>
                  24년 12월 5일 11:00 - 11:30
                  <br />
                  24년 12월 20일 09:00 - 09:30
                </Alert>
              </Stack>
            </StyledProjectDetailCard>
          </Stack>
        </Stack>
      </ContentLayout>

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
        <Button onClick={() => setShowSuccessDrawer(true)}>예약하기</Button>
      </Stack>

      {renderSuccessDrawer()}
    </>
  );
};

const StyledProjectDetailCard = styled(Stack)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 1.25rem;
  gap: 1rem;
`;

export default ProjectDetail;
