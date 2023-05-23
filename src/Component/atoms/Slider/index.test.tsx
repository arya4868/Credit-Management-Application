import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import SliderCom from './index'

describe('SliderCom', () => {
  it('renders a slider with the given props', () => {
    const val = 50
    const max = 100
    const handleChange = (event: Event, value: number | number[]) =>
      void render(
        <SliderCom SliderValue={val} max={max} onHandleChange={handleChange} />
      )

    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('value', val.toString())
    expect(slider).toHaveAttribute('max', max.toString())

    const newValue = 70
    fireEvent.change(slider, { target: { value: newValue } })
    expect(handleChange).toHaveBeenCalledWith(expect.anything(), newValue)
  })
})
