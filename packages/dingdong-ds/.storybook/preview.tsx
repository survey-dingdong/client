import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { dingdongTheme } from "../src/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider theme={dingdongTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],

  tags: ["autodocs"],
};

export default preview;
