import Cashkicklanch from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/Cashkicklanch',
  component: Cashkicklanch,
} as ComponentMeta<typeof Cashkicklanch>

const Template: ComponentStory<typeof Cashkicklanch> = (Cashkicklanchrgs) => (
  <Cashkicklanch />
)

export const Normal = Template.bind({})
