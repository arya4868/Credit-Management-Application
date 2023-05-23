import { ComponentMeta, ComponentStory } from '@storybook/react'
import NavContent from './index'

export default {
  title: 'Molecules/NavContent',
  component: NavContent,
  argTypes: {
    title: { control: 'text' },
  },
} as ComponentMeta<typeof NavContent>

const Template: ComponentStory<typeof NavContent> = (args) => (
  <NavContent {...args} />
)

export const NavContent1 = Template.bind({})
NavContent1.args = {
  title: 'hello',
}
