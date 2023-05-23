import { ComponentMeta, ComponentStory } from '@storybook/react'
import NewCashKickNavBar from './index'

export default {
  title: 'Molecules/NewCashKickNavBar',
  component: NewCashKickNavBar,
} as ComponentMeta<typeof NewCashKickNavBar>

const Template: ComponentStory<typeof NewCashKickNavBar> = () => (
  <NewCashKickNavBar />
)

export const CashKickNavBar = Template.bind({})
