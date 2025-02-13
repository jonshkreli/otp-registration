import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import WYButton from "./WYButton";

const meta: Meta<typeof WYButton> = {
  title: "Components/WYButton",
  component: WYButton,
  argTypes: {
    kind: {
      control: "radio",
      options: ["primary", "secondary", "cancel"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof WYButton>;

export const Primary: Story = {
  args: {
    kind: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    kind: "secondary",
    children: "Secondary Button",
  },
};

export const Cancel: Story = {
  args: {
    kind: "cancel",
    children: "Cancel Button",
  },
};
