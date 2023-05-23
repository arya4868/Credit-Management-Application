import { Meta, Story } from '@storybook/react'
import { Slider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#9747FF',
    },
  },
})

export default {
  title: 'Atoms/Slider',
  component: Slider,
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: 200, height: 200, margin: 30 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 200,
        step: 20,
      },
    },
  },
} as Meta

type SliderProps = {
  value: number
  max: number
  step: number
}

const Template: Story<SliderProps> = ({ value, max, step }) => (
  <Slider
    value={value}
    max={max}
    step={step}
    sx={{
      '& .MuiSlider-root': {
        height: '20px',
      },
      '& .MuiSlider-thumb': {
        borderRadius: '20%',
      },
    }}
  />
)

export const Default = Template.bind({})
Default.args = {
  value: 0,
  max: 200,
  step: 20,
}

export const AvgSlider = Template.bind({})
AvgSlider.args = {
  value: 100,
  max: 200,
  step: 20,
}
AvgSlider.parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f5f5f5',
      },
      {
        name: 'dark',
        value: '#333333',
      },
    ],
  },
}

export const SliderWithControls = Template.bind({})
SliderWithControls.args = {
  value: 100,
  max: 200,
  step: 20,
}
SliderWithControls.argTypes = {
  value: {
    control: {
      type: 'range',
      min: 0,
      max: 200,
      step: 20,
    },
  },
}
