import ReviewSummary from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'organism/ReviewSummary',
  component: ReviewSummary,
} as ComponentMeta<typeof ReviewSummary>

const Template: ComponentStory<typeof ReviewSummary> = (args) => (
  <ReviewSummary {...args} />
)
export const primary = Template.bind({})
