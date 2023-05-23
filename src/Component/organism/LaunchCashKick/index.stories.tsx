import LaunchCashKick from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/LaunchCashKick',
  component: LaunchCashKick,
} as ComponentMeta<typeof LaunchCashKick>

const Template: ComponentStory<typeof LaunchCashKick> = () => <LaunchCashKick />

export const Launch = Template.bind({})
