import ReviewTable from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'organism/ReviewTable',
  component: ReviewTable,
} as ComponentMeta<typeof ReviewTable>

const Template: ComponentStory<typeof ReviewTable> = (args) => (
  <ReviewTable {...args} />
)
export const primary = Template.bind({})
