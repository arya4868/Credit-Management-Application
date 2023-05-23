import React from 'react'
import SliderCom from '../../atoms/Slider'
import MuiTypography from '../../atoms/Typography'
import { Button, styled } from '@mui/material'
import {
  GroupStyle,
  SelectedAmountStyle,
  SlideStyle,
} from '../../../StyleComponent'
import theme from '../../../../Themes'

const StyleSlider = styled('div')({
  height: '60px',
})

export const MuiSlider = styled('div')({
  width: '100px',
  height: '22px',
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '140%',
  color: '#A5A5A6',
  flex: 'none',
  order: '0',
  flexGrow: '1',
})



interface SliderChangeProps {
  onHandleResetBtn: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  amountSelected: number
  SliderValue: number
  onHandleChange: (event: Event, newValue: number | number[]) => void
}

const SliderChange = (props: SliderChangeProps) => {
  return (
    <GroupStyle>
      <SlideStyle style={{ border: theme.colors.SlideStyleBorder }}>
        <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
          Slide to autoselect
        </MuiTypography>

        <Button
          onClick={props.onHandleResetBtn}
          style={{
            background: theme.colors.SlideStyleBorder,
            height: '38px',
            alignItems: 'center',
            borderRadius: '12px',
            textTransform: 'none',
          }}
          variant="contained"
        >
          <MuiTypography variant="body1">Reset</MuiTypography>
        </Button>
      </SlideStyle>

      <SliderCom
        SliderValue={props.SliderValue}
        max={888000.0}
        onHandleChange={props.onHandleChange}
      ></SliderCom>

      <SelectedAmountStyle>
        <MuiTypography
          variant="body1"
          color={theme.colors.SliderBorderColor}
        >{`$ ${props.amountSelected}`}</MuiTypography>
        <MuiTypography variant="body1" color={theme.colors.DarkTextColor}>
          selected of
        </MuiTypography>
        <MuiTypography variant="body1" color={theme.colors.TextColor}>
          $ 888000
        </MuiTypography>
      </SelectedAmountStyle>
    </GroupStyle>
  )
}

export default SliderChange
