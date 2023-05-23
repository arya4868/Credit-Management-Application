import { ComponentMeta, ComponentStory } from '@storybook/react'
import SummaryPayment from './index'

export default {
  title: 'Molecules/SummaryPayment',
  component: SummaryPayment,
  argsTypes: {},
} as ComponentMeta<typeof SummaryPayment>

const Template: ComponentStory<typeof SummaryPayment> = (args) => (
  <SummaryPayment {...args} />
)

export const primary = Template.bind({})
primary.args = {}
