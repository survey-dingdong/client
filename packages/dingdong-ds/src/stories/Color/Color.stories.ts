import type { StoryObj } from "@storybook/react";
import Color from "./Color";

const meta = {
  title: "Color/Color",
  component: Color,
  parameters: {
    layout: "left",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorStory: Story = {};
