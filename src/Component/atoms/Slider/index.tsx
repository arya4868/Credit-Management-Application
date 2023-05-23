import { Slider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import theme from '../../../../Themes'

type SliderProps = {
  SliderValue: number
  max: number

  onHandleChange: (event: Event, newValue: number | number[]) => void
}

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#9747FF',
//     },
//   },
// })

const useStyles = makeStyles({
  thumb: {
    color: theme.colors.ReviewButtonBackground,
    '&.MuiSlider-thumb': {
      width: 23,
      height: 23,
      borderRadius: 8,
      border: `3px solid ${theme.colors.SliderBorderColor}`,
    },
  },
  track: {
    color: theme.colors.ReviewButtonBackground,
  },
  rail: {
    color: theme.colors.UnselectedTrackColor,
  },
})

const SliderCom = ({ SliderValue, max, onHandleChange }: SliderProps) => {
  const classes = useStyles()

  return (
    <Box sx={{ width: 270 }}>
      <Slider
        value={SliderValue}
        max={max}
        data-testid="slider"
        onChange={onHandleChange}
        classes={{
          thumb: classes.thumb,
          track: classes.track,
          rail: classes.rail,
        }}
      />
    </Box>
  )
}

export default SliderCom
