import { Meta } from "@storybook/react";
import { TypographyPage } from "../components/_internal/typo";

export default {
  title: "Design System/Typography",
  component: TypographyPage,
} as Meta;

const Template = () => <TypographyPage />;

export const Default = Template.bind({});
