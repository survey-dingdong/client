import type { Meta, StoryObj } from "@storybook/react";
import Tag from "../../components/tag/Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Tag",
    color: "primary",
  },
};

export const Success: Story = {
  args: {
    label: "Tag",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    label: "Tag",
    color: "error",
  },
};

export const Warning: Story = {
  args: {
    label: "Tag",
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    label: "Tag",
    color: "info",
  },
};
