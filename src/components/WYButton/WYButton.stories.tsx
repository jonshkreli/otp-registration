import type { Meta, StoryObj } from "@storybook/react";
import WYButton from "./WYButton";

const meta: Meta<typeof WYButton> = {
  title: "Components/WYButton",
  component: WYButton,
};

export default meta;
type Story = StoryObj<typeof WYButton>;

export const Default: Story = {
  render: () => <WYButton>Click Me</WYButton>, // ✅ Fixed: Added children
};
