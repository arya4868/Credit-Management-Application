import { ModalHeader } from './index'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/ModalHeader',
  component: ModalHeader,
  argsTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} as ComponentMeta<typeof ModalHeader>

const Template: ComponentStory<typeof ModalHeader> = (args) => (
  <ModalHeader {...args} />
)

export const primary = Template.bind({})
primary.args = {
  title: 'Modal',
  description: 'Helooo',
}
