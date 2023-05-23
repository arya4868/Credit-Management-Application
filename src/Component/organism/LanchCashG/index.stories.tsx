import LaunchCashKickG from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/LaunchCashKickG',
  component: LaunchCashKickG,
} as ComponentMeta<typeof LaunchCashKickG>

const Template: ComponentStory<typeof LaunchCashKickG> = () => (
  <LaunchCashKickG />
)

export const LanchCashkick = Template.bind({})
