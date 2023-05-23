import SliderTable from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'organism/SliderTable',
  component: SliderTable,
  argsTypes: {
    onChange: {
      Action: 'Changed',
    },
  },
} as ComponentMeta<typeof SliderTable>

const Template: ComponentStory<typeof SliderTable> = (args) => (
  <SliderTable {...args} />
)
export const primary = Template.bind({})
primary.args = {
  selectAll: true,
  selected: [],
}
