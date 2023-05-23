import HomePage1 from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Template/HomePage1',
  Component: HomePage1,
} as ComponentMeta<typeof HomePage1>

const Template: ComponentStory<typeof HomePage1> = (args) => <HomePage1 />

export const primary = Template.bind({})
