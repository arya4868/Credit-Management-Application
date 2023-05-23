import { ComponentMeta, ComponentStory } from '@storybook/react'
import ReportCard from './index'

export default {
  title: 'organism/InfoCircle',
  component: ReportCard,
} as ComponentMeta<typeof ReportCard>

const Template: ComponentStory<typeof ReportCard> = (args) => <ReportCard />

export const Normal = Template.bind({})
