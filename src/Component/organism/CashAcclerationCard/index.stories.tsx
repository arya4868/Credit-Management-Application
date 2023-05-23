import CashAcclerationCard from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/CashAcclerationCard',
  component: CashAcclerationCard,
} as ComponentMeta<typeof CashAcclerationCard>

const Template: ComponentStory<typeof CashAcclerationCard> = () => (
  <CashAcclerationCard />
)

export const CashAcclerationCardFirst = Template.bind({})
