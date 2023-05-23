import { ComponentMeta, ComponentStory } from '@storybook/react'
import GreetingMolecule from './index'

export default {
  title: 'Molecules/GreetingMolecule',
  component: GreetingMolecule,
  argsTypes: {
    height: { control: 'number' },
    width: { control: 'number' },
  },
} as ComponentMeta<typeof GreetingMolecule>

const Template: ComponentStory<typeof GreetingMolecule> = (args) => (
  <GreetingMolecule />
)

export const primary = Template.bind({})
primary.args = {
  height: '200px',
  width: '200px',
}
