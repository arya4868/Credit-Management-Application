import LaunchCashKickButton from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/LaunchCashKickButton',
  component: LaunchCashKickButton,
} as ComponentMeta<typeof LaunchCashKickButton>

const Template: ComponentStory<typeof LaunchCashKickButton> = () => (
  <LaunchCashKickButton />
)

export const LaunchCashKickButtonFirst = Template.bind({})
