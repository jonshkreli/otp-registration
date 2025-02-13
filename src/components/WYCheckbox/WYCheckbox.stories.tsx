import type {Meta, StoryObj} from "@storybook/react";
import WYCheckbox from "./WYCheckbox";

const meta: Meta<typeof WYCheckbox> = {
  title: "Components/WYCheckbox",
  component: WYCheckbox,
};

export default meta;
type Story = StoryObj<typeof WYCheckbox>;

export const Default: Story = {
  render: () => <WYCheckbox label="Accept terms" />, // ✅ Fixed: Added required `label`
};
