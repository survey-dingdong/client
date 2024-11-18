import { IconType } from "dingdong-ds";

type BottomNavType = {
  label: string;
  icon: IconType;
};

export const BOTTOM_NAVS: BottomNavType[] = [
  {
    label: "실험 공고",
    icon: "calendar",
  },
  {
    label: "참여 관리",
    icon: "person",
  },
  {
    label: "채팅",
    icon: "bubble",
  },
  {
    label: "알림",
    icon: "bell",
  },
  {
    label: "My",
    icon: "person",
  },
];
