import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../components/icon/Icon";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSearchIconStory: Story = {
  args: {
    icon: "userSearch",
    color: "primary",
    size: "medium",
  },
};
