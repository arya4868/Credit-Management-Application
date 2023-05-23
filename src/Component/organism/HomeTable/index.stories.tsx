import HomeTable from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Organism/HomeTable',
  component: HomeTable,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomeTable>

const Template: ComponentStory<typeof HomeTable> = () => <HomeTable />

export const First = Template.bind({})
