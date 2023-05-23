//import { ComponentMeta, ComponentStory } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// import { ComponentMeta, ComponentStory } from '@storybook/addon-actions'
import { ButtonCashAccleration } from './index'

export default {
  title: 'Molecules/ButtonCashAccleration',
  component: ButtonCashAccleration,
  argTypes: {
    text: { control: 'text' },
    onclick: { control: 'String' },
  },
} as ComponentMeta<typeof ButtonCashAccleration>

const Template: ComponentStory<typeof ButtonCashAccleration> = (args) => (
  <ButtonCashAccleration {...args} />
)

export const ButtonAcceleration = Template.bind({})
ButtonAcceleration.args = {
  text: 'hello',
}
