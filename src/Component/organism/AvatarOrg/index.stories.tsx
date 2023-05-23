import AvatarOrg from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/AvatarOrg',
  component: AvatarOrg,
} as ComponentMeta<typeof AvatarOrg>

const Template: ComponentStory<typeof AvatarOrg> = () => <AvatarOrg />

export const Avatar = Template.bind({})
