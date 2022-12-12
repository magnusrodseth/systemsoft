import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavigationMenu from "ui/organisms/NavigationMenu";

export default {
  title: "NavigationMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

const Template: ComponentStory<typeof NavigationMenu> = () => (
  <NavigationMenu />
);

export const Default = Template.bind({});
Default.args = {};
