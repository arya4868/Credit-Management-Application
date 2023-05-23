import { ComponentMeta, ComponentStory } from '@storybook/react'
import Term from './index'

export default {
  title: 'Molecules/Term',
  component: Term,
  argsTypes: {},
} as ComponentMeta<typeof Term>

const Template: ComponentStory<typeof Term> = (args) => <Term {...args} />

export const primary = Template.bind({})
primary.args = {
  Selected_Row: [],
}
