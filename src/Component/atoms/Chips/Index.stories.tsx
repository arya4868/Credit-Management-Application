import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chip } from '@mui/material'

export default {
  title: 'Atoms/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Chip1 = Template.bind({})
Chip1.args = {
  label: 'Availabel',
  sx: {
    backgroundColor: '#E39AB2',
    borderRadius: '4px',
  },
}
export const Chip2 = Template.bind({})
Chip2.args = {
  label: 'Availabel',
  sx: {
    backgroundColor: '#393552',
    borderRadius: '4px',
    color: 'white',
  },
}
