import { ComponentMeta, ComponentStory } from '@storybook/react'

import HomeButton from './index'

export default {
  title: 'Molecules/ HomeButton',
  Component: HomeButton,
} as ComponentMeta<typeof HomeButton>

const Template: ComponentStory<typeof HomeButton> = (args) => <HomeButton />

export const Homebutton = Template.bind({})
Homebutton.args = {}
