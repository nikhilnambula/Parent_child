import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Molecule from "../Components/molecules/NavBar";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon6,
  Icon7,
} from "../Components/Atoms/SvgIcons";

export default {
  title: "Example/Navbar",
  component: Molecule,
  parameters: {},
} as ComponentMeta<typeof Molecule>;

const Template: ComponentStory<typeof Molecule> = (args) => (
  <>
    <Molecule icons={[Icon3, Icon4, Icon7, Icon2, Icon1, Icon6]}></Molecule>
  </>
);

export const Navbar_ = Template.bind({});
