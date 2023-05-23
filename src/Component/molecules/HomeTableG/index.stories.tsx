import CashKickTableG from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/CashKickTableG',
  component: CashKickTableG,
} as ComponentMeta<typeof CashKickTableG>

const Template: ComponentStory<typeof CashKickTableG> = () => <CashKickTableG />

export const CashKickTableGFirst = Template.bind({})
