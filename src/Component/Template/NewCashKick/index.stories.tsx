import { ComponentMeta, ComponentStory } from '@storybook/react'
import NewCashKick from './index'

export default {
  title: 'Template/NewCashKick',
  component: NewCashKick,
} as ComponentMeta<typeof NewCashKick>

const Template: ComponentStory<typeof NewCashKick> = () => <NewCashKick />

export const NewCashKickFirst = Template.bind({})
