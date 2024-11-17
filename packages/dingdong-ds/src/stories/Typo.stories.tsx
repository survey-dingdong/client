import { Meta } from "@storybook/react";
import { TypographyPage } from "../components/typo";

export default {
  title: "Design System/Typography",
  component: TypographyPage,
} as Meta;

const Template = () => <TypographyPage />;

export const Default = Template.bind({});
