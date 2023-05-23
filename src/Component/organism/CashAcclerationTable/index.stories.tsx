import CashAcclerationTable from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/CashAcclerationTable',
  component: CashAcclerationTable,
} as ComponentMeta<typeof CashAcclerationTable>

const Template: ComponentStory<typeof CashAcclerationTable> = () => (
  <CashAcclerationTable />
)

export const CashAcclerationTableFirst = Template.bind({})
