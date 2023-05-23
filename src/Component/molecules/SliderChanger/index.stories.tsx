import SliderChange from './index'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/SliderChange',
  component: SliderChange,
  argTypes: {
    onHandleChange: {
      Action: 'Changed',
    },
  },
} as ComponentMeta<typeof SliderChange>

const Template: ComponentStory<typeof SliderChange> = (args) => (
  <SliderChange {...args} />
)

export const primary = Template.bind({})
primary.args = {
  amountSelected: 10000,
  SliderValue: 1000,
}
