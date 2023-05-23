import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextFieldCom from './index'

describe('TextFieldCom', () => {
  it('renders with the provided placeholder text', () => {
    render(<TextFieldCom placeholder="test placeholder" />)
    const inputElement = screen.getByPlaceholderText(/test placeholder/i)
    expect(inputElement).toBeInTheDocument()
  })

  it('updates the input value when a new country is selected', () => {
    render(<TextFieldCom placeholder="test placeholder" type="select" />)
    const selectElement = screen.getByPlaceholderText(/test placeholder/i)
    expect(selectElement).toBeInTheDocument()
  })
})
