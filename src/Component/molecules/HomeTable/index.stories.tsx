import CashKickTable from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/CashKickTable',
  component: CashKickTable,
} as ComponentMeta<typeof CashKickTable>

const Template: ComponentStory<typeof CashKickTable> = () => <CashKickTable />

export const CashKickTableFirst = Template.bind({})
