import HomePage from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Template/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />

export const primary = Template.bind({})
