import CashAcclerationPage from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Template/CashAcclerationPage',
  component: CashAcclerationPage,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CashAcclerationPage>

const Template: ComponentStory<typeof CashAcclerationPage> = (args) => (
  <CashAcclerationPage />
)

export const primary = Template.bind({})
