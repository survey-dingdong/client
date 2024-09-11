import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ICONS } from "../components";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "info", "error", "warning", "success"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    icon: {
      options: Object.keys(ICONS),
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSearchIconStory: Story = {
  args: {
    icon: "userSearch",
    color: "warning",
    size: "medium",
  },
};
