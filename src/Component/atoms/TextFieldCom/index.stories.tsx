import { Meta, Story } from '@storybook/react'
import TextFieldCom, { TextFieldProps } from './index'

export default {
  title: 'Atoms/TextFieldCom',
  component: TextFieldCom,
  argTypes: {
    placeholder: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'select'],
      },
    },
  },
} as Meta

export const Template: Story<TextFieldProps> = (args) => (
  <TextFieldCom {...args} />
)

export const Text = Template.bind({})
Text.args = {
  placeholder: 'Your Name',
}

export const Email = Template.bind({})
Email.args = {
  placeholder: 'Email Address',
  type: 'email',
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Password',
  type: 'password',
}

export const Select = Template.bind({})
Select.args = {
  placeholder: 'Select',
  type: 'select',
}

export const WithControls: Story<TextFieldProps> = (args) => (
  <TextFieldCom {...args} />
)
WithControls.args = {
  placeholder: 'With Controls',
}
