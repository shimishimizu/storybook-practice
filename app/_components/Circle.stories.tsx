import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  title: "Circle",
  component: Circle,
  argTypes: {
    variant: {
      control: "select",
      options: ["orange", "green", "yellow"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * オレンジのボタン
 */
export const DefaultCircle: Story = {
  args: {
    variant: "orange",
  },
};

/**
 * グリーンのボタン
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};

/**
 * イエローのボタン
 */
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};

export const GroupedCircle: Story = {
  render: () => (
    <>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </>
  ),
};
