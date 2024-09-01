import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../components/Icon";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSearchIconStory: Story = {
  args: {
    icon: "userSearch",
  },
};
