import AvatarMolecule from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Molecules/AvatarMolecule',
  component: AvatarMolecule,
} as ComponentMeta<typeof AvatarMolecule>

const Template: ComponentStory<typeof AvatarMolecule> = () => <AvatarMolecule />

export const First = Template.bind({})
