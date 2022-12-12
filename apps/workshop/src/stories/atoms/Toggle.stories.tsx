import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "ui/atoms/Toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {
    active: [true, false],
    activeIcon: [<SunIcon />, <MoonIcon />],
    inactiveIcon: [<MoonIcon />, <SunIcon />],
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const ToggleTheme = Template.bind({});
ToggleTheme.args = {
  active: true,
  inactiveIcon: <MoonIcon />,
  activeIcon: <SunIcon />,
};
