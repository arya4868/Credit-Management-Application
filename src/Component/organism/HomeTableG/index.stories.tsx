import HomeTableG from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/HomeTableG',
  component: HomeTableG,
} as ComponentMeta<typeof HomeTableG>

const Template: ComponentStory<typeof HomeTableG> = () => <HomeTableG />

export const Table = Template.bind({})
