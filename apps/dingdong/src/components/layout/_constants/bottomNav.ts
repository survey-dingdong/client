import { IconType } from "@dingdong/design-system";

type BottomNavType = {
  label: string;
  icon: IconType;
  path: string;
};

export const BOTTOM_NAVS: BottomNavType[] = [
  {
    label: "실험 공고",
    icon: "thumbnail",
    path: "/project",
  },
  {
    label: "참여 관리",
    icon: "person",
    path: "/my-project",
  },
  {
    label: "채팅",
    icon: "bubble",
    path: "/chat",
  },
  {
    label: "알림",
    icon: "bell",
    path: "/notice",
  },
  {
    label: "My",
    icon: "person",
    path: "/my-page",
  },
];

export const BOTTOM_NAV_HEIGHT = 50;
