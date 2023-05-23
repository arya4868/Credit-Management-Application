import { ComponentMeta, ComponentStory } from '@storybook/react'
import HeadingMolecule from '.'

export default {
  title: 'Molecules/HeadingMolecule',
  component: HeadingMolecule,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof HeadingMolecule>

const Template: ComponentStory<typeof HeadingMolecule> = (args) => (
  <HeadingMolecule {...args} />
)

export const ButtonAcceleration = Template.bind({})
ButtonAcceleration.args = {
  text: 'hello everyone',
}
