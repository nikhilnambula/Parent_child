import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Icon2, Icon7 } from "../Components/Atoms/SvgIcons";
import { Header, Header2 } from "../Components/Atoms/Icons";
import { Header1 } from "../Components/Atoms/Icons";
import { Header3 } from "../Components/Atoms/Icons";

export default {
  title: "Example/Icons",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
const Template1: ComponentStory<typeof Header1> = (args) => (
  <Header1 {...args} />
);
const Template2: ComponentStory<typeof Header2> = (args) => (
  <Header2 {...args} />
);
const Template3: ComponentStory<typeof Header3> = (args) => (
  <Header3 {...args} />
);

export const Amount = Template.bind({});
export const Price_fluctuation = Template1.bind({});
export const Dashboard = Template2.bind({});
export const logout = Template3.bind({});
