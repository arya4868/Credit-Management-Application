
import { Story, Meta } from '@storybook/react'
import MuiAvatar, { Props } from './index'
export default {
  title: 'Atoms/Avatar',
  component: MuiAvatar,
} as Meta
const Template: Story<Props> = (args) => <MuiAvatar {...args} />
export const profile = Template.bind({})
profile.args = {
  src: 'assets/Rectangle 554.svg',
  variant: 'rounded',
}
