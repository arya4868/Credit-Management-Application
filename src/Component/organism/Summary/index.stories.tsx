import Summary from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organism/Summary',
  component: Summary,
  argTypes: {},
} as ComponentMeta<typeof Summary>

const Template: ComponentStory<typeof Summary> = (args) => <Summary {...args} />

export const primary = Template.bind({})
