import type { StoryObj } from "@storybook/react";

import Color from "../components/color/Color";

const meta = {
  title: "Example/Color",
  component: Color,
  parameters: {
    layout: "left",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorStory: Story = {};
