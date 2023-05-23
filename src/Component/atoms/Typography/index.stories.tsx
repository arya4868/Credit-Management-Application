import MuiTypography, { TypographyProps } from './index'
import { Meta, Story } from '@storybook/react'

export default {
  component: MuiTypography,
  title: 'Atoms/Typography',
} as Meta

const Template: Story<TypographyProps> = (args) => <MuiTypography {...args} />
export const GoodAfternoon = Template.bind({})
GoodAfternoon.args = {
  children: 'Good Afternoon',
  variant: 'h2',
}

export const Date = Template.bind({})
Date.args = {
  children: 'April 02 2021',
  variant: 'h3',
}
export const Content = Template.bind({})
Content.args = {
  children: (
    <>
      You have upto <span style={{ color: '#C9C8CC' }}>$80,000.00</span>{' '}
      available for a new cash advance
    </>
  ),
  variant: 'body1',
}
export const ExpectedAmount = Template.bind({})
ExpectedAmount.args = {
  children: 'Expected amount',
  variant: 'body2',
}
export const CashKick = Template.bind({})
CashKick.args = {
  children: 'New Cash Kick',
  variant: 'button',
}
export const EditProfile = Template.bind({})
EditProfile.args = {
  children: 'Edit Profile',
  variant: 'caption',
}
export const Subscription = Template.bind({})
Subscription.args = {
  children: 'Manage Subscription',
  variant: 'button',
}
