import SeederLogo from './index'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/SeederLogo',
  component: SeederLogo,
} as ComponentMeta<typeof SeederLogo>

const Template: ComponentStory<typeof SeederLogo> = () => <SeederLogo />

export const SeederLogoFirst = Template.bind({})
