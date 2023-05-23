import Button from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {
  color: 'primary',
  variant: 'contained',
  children: 'click me',
  size: 'large',
  sx: { backgroundColor: '#6C5DD3' },
}

export const LargeOne = Template.bind({})
LargeOne.args = {
  variant: 'contained',
  children: 'click me',

  sx: {
    height: '60px',
    width: '130px',
    color: 'white',
    backgroundColor: '#6C5DD3',
    padding: '20px,40px,20px,40px',
    gap: '8px',
    font: 'Gilory',
    fontWeight: '400',
    fontSize: '16px',
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: '4PX',
  },
}
export const MediumOne = Template.bind({})
MediumOne.args = {
  variant: 'outlined',
  children: 'Button',

  sx: {
    height: '43px',
    width: '98px',
    color: 'white',
    backgroundColor: '#6C5DD3',
    padding: '20px,40px,20px,40px',
    gap: '8px',
    font: 'Gilory',
    fontWeight: '400',
    fontSize: '16px',
    textAlign: 'center',
    borderColor: 'white',
  },
}
export const SmallOne = Template.bind({})
SmallOne.args = {
  variant: 'contained',
  children: 'Button',
  size: 'small',
  sx: {
    height: '31px',
    width: '74px',
    color: 'white',
    backgroundColor: '#6C5DD3',
    padding: '6px,12px,6px,12px',
    gap: '8px',
    font: 'Gilory',
    fontWeight: '400',
    fontSize: '16px',
    textAlign: 'center',
    borderColor: 'white',
    borderRadius: '4PX',
  },
}
