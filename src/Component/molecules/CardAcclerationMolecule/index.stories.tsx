import { ComponentMeta, ComponentStory } from '@storybook/react'
import CardAcclerationMolecule from '.'


export default {
  title: 'Molecules/CardAcclerationMolecule',
  component: CardAcclerationMolecule,

  argTypes: {
    text: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    source: {
      control: 'text',
    },
  },


} as ComponentMeta<typeof CardAcclerationMolecule>

const Template: ComponentStory<typeof CardAcclerationMolecule> = (args) => (
  <CardAcclerationMolecule {...args} />
)

export const CardAccleration = Template.bind({})
CardAccleration.args = {
  text: 'hello everyone',
  value: 'hai',
  source: 'ChequeImg',
}

