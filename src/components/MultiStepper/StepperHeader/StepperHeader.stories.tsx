import type { Meta, StoryObj } from "@storybook/react";
import StepperHeader from "./StepperHeader";

const meta: Meta<typeof StepperHeader> = {
    title: "Components/StepperHeader",
    component: StepperHeader,
};

export default meta;
type Story = StoryObj<typeof StepperHeader>;

export const Default: Story = {
    render: () => <StepperHeader currentStep={2} totalSteps={3} pageTitle={"Registration"} description={"Fill details"} />,
};
