import {Meta, StoryObj} from "@storybook/react";
import WYTextField from "./WYTextField";

const meta: Meta<typeof WYTextField> = {
    title: "Components/WYTextField",
    component: WYTextField,
    args: {
        labelText: "Example Label",
        placeholder: "Enter text...",
    },
};

export default meta;

type Story = StoryObj<typeof WYTextField>;

export const Default: Story = {};
export const WithTooltip: Story = {
    args: {
        tooltipText: "This is a tooltip",
    },
};
export const Required: Story = {
    args: {
        required: true,
    },
};
export const OTPStyle: Story = {
    args: {
        otpStyle: true,
        placeholder: undefined,
        labelText: undefined,
    },
};
