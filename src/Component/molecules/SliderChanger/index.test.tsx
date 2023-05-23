import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SliderChange from './index'
import '@testing-library/jest-dom/extend-expect'

describe('Slider_Change', () => {
  it('calls the handleResetBtn function when the reset button is clicked', () => {
    const handleResetBtn = jest.fn()
    const handleChange = jest.fn()
    const amountSelected = 500000.0
    const sliderValue = 50

    render(
      <SliderChange
        onHandleResetBtn={handleResetBtn}
        amountSelected={amountSelected}
        SliderValue={sliderValue}
        onHandleChange={handleChange}
      />
    )

    const resetButton = screen.getByRole('button', { name: /Reset/i })
    fireEvent.click(resetButton)

    expect(handleResetBtn).toHaveBeenCalled()
  })
  it('calls the handleChange function when the slider value changes', () => {
    const handleResetBtn = jest.fn()
    const handleChange = jest.fn()
    const amountSelected = 500000.0
    const sliderValue = 50

    render(
      <SliderChange
        onHandleResetBtn={handleResetBtn}
        amountSelected={amountSelected}
        SliderValue={sliderValue}
        onHandleChange={handleChange}
      />
    )

    const slider = screen.getByRole('slider')
    fireEvent.change(slider, { target: { value: 75 } })
    expect(handleChange).toHaveBeenCalled()
  })
})
