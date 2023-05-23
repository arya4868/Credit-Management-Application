import ReviewCashKick from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Template/ReviewCashKick',
  component: ReviewCashKick,
} as ComponentMeta<typeof ReviewCashKick>

const Template: ComponentStory<typeof ReviewCashKick> = (args) => (
  <ReviewCashKick />
)

export const primary = Template.bind({})
