import type {Meta, StoryObj} from "@storybook/react";
import WYSelect from "./WYSelect";

const meta: Meta<typeof WYSelect> = {
  title: "Components/WYSelect",
  component: WYSelect,
};

export default meta;
type Story = StoryObj<typeof WYSelect>;

export const Default: Story = {
  render: () => (
      <WYSelect
          labelText="Select an option"
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
      />
  ), // ✅ Fixed: Added required `label` and `options`
};
