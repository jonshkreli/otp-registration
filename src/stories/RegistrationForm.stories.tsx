import type { Meta, StoryObj } from "@storybook/react";
import RegistrationForm from "../components/RegistrationForm";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof RegistrationForm> = {
    title: "Forms/RegistrationForm",
    component: RegistrationForm,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
    render: () => <RegistrationForm />,
};
