import LaunchCashKickText from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/LaunchCashKickText',
  component: LaunchCashKickText,
} as ComponentMeta<typeof LaunchCashKickText>

const Template: ComponentStory<typeof LaunchCashKickText> = () => (
  <LaunchCashKickText />
)

export const LaunchCashKickTextFirst = Template.bind({})
