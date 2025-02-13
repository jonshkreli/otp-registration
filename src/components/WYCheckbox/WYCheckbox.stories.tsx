import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import WYCheckbox from "./WYCheckbox";

const meta: Meta<typeof WYCheckbox> = {
    title: "Components/WYCheckbox",
    component: WYCheckbox,
    argTypes: {
        checked: { control: "boolean" },
        label: { control: "text" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof WYCheckbox>;

export const Default: Story = {
    args: {
        label: "Accept Terms",
    },
};

export const Checked: Story = {
    args: {
        label: "Checked Checkbox",
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled Checkbox",
        disabled: true,
    },
};
