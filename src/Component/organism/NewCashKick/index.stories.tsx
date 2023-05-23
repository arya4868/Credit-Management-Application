import { NewcashKick } from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/NewcashKick',
  component: NewcashKick,
} as ComponentMeta<typeof NewcashKick>

const Template: ComponentStory<typeof NewcashKick> = () => <NewcashKick />

export const cashKick = Template.bind({})
