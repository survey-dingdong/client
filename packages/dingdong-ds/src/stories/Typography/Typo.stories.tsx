import { Meta } from "@storybook/react";
import TypographyPage from "./Typo";

export default {
  title: "Typography/Typography",
  component: TypographyPage,
} as Meta;

const Template = () => <TypographyPage />;

export const Default = Template.bind({});
