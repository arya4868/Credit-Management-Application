import { ComponentMeta, ComponentStory } from '@storybook/react'
import SummaryPaymentButton from './index'

export default {
  title: 'Molecules/SummaryPaymentButton',
  component: SummaryPaymentButton,
  argTypes: {
    buttontext: { control: 'text' },
    onclick: { control: 'String' },
  },
} as ComponentMeta<typeof SummaryPaymentButton>

const Template: ComponentStory<typeof SummaryPaymentButton> = (args) => (
  <SummaryPaymentButton {...args} />
)

export const SummaryPaymentButton1 = Template.bind({})
SummaryPaymentButton1.args = {
  buttontext: 'hello',
}
