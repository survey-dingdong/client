import type { StoryObj } from "@storybook/react";
import { Banner } from "../../components";

const meta = {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    severity: {
      control: false,
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    severity: "success",
    description: "This is a success banner",
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    title: "This is an info banner",
    description: "This is an info banner",
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "This is a warning banner",
    description: "This is a warning banner",
    onClose: () => {},
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    title: "This is an error banner",
    description: "This is an error banner",
    onClose: () => {},
  },
};
