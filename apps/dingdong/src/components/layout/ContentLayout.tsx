import { Stack } from "@mui/material";
import { HEADER_HEIGHT } from "./_constants/header";
import { BOTTOM_NAV_HEIGHT } from "./_constants/bottomNav";

interface ContentLayoutProps {
  children: React.ReactNode;
  hiddenHeader?: boolean;
  hiddenBottomNav?: boolean;
}

const ContentLayout = ({
  children,
  hiddenHeader,
  hiddenBottomNav,
}: ContentLayoutProps) => {
  return (
    <Stack
      marginTop={`${HEADER_HEIGHT}px`}
      height={`calc(100vh - ${hiddenHeader ? 0 : HEADER_HEIGHT}px - ${
        hiddenBottomNav ? 0 : BOTTOM_NAV_HEIGHT
      }px)`}
      overflow="auto"
    >
      {children}
    </Stack>
  );
};

export default ContentLayout;
