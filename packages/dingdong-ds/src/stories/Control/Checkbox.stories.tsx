import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Typography } from "@mui/material";
import { Checkbox } from "../../components";

const meta: Meta<typeof Checkbox> = {
  title: "Control/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: "radio",
      options: ["normal", "small"],
    },
    variant: {
      control: "select",
      options: ["square", "round", "line"],
      description: "checkbox icon style",
    },
    indeterminate: {
      control: "boolean",
      description: "checkbox indeterminate state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxPrimary: Story = {
  name: "Checkbox",
  args: {
    size: "normal",
    disabled: false,
    checked: false,
    variant: "square",
    indeterminate: false,
  },
};

export const CheckboxState = () => {
  return (
    <Stack gap={2}>
      <Typography variant="label1Normal" fontWeight="bold">
        state
      </Typography>
      <Stack direction="row" gap={1}>
        <Stack>
          <code>unchecked</code>
          <Checkbox checked={false} />
        </Stack>
        <Stack>
          <code>checked</code>
          <Checkbox checked />
        </Stack>
        <Stack>
          <code>partial</code>
          <Checkbox checked indeterminate />
        </Stack>
      </Stack>
    </Stack>
  );
};
