import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavigationMenu from "ui/organisms/Navbar";

export default {
  title: "NavigationMenu",
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

const Template: ComponentStory<typeof NavigationMenu> = () => (
  <NavigationMenu />
);

export const Default = Template.bind({});
Default.args = {};
