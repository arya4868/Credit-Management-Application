import React, { useState, useEffect } from 'react'
import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from './index'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta

const Template: Story<CheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState<boolean>(args.checked || false)
  const [isDisabled, setIsDisabled] = useState<boolean>(args.disabled || false)

  useEffect(() => {
    setIsChecked(args.checked || false)
  }, [args.checked])

  useEffect(() => {
    setIsDisabled(args.disabled || false)
  }, [args.disabled])

  const handleOnChange = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    args.onChange && args.onChange(newValue)
  }

  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={handleOnChange}
      disabled={isDisabled}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox',
  checked: false,
  disabled: false,
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'Checked Checkbox',
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
}

export const CheckedDisabled = Template.bind({})
CheckedDisabled.args = {
  label: 'Checked Disabled Checkbox',
  checked: true,
  disabled: true,
}
