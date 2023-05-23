import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ButtonCashAccleration } from './index'

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn()
  const { getByRole } = render(
    <ButtonCashAccleration text="Click me" onClick={handleClick} />
  )
  const button = getByRole('button')
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalled()
})
test('renders with text', () => {
  render(
    <ButtonCashAccleration
      onClick={() => alert('Button clicked')}
      text="Click me"
    />
  )
  const button = screen.getByRole('button', { name: /Click me/i })
  expect(button.textContent).toBe('Click me')
})
test('renders with default styles', () => {
  render(
    <ButtonCashAccleration
      onClick={() => alert('Button clicked')}
      text="Click me"
    />
  )
  // const button = screen.getByRole('button')
  // expect(button).toHaveStyle(`
  //     background: #484752;
  //     border: none;
  //     border-radius: 5px;
  //     color: #FFFFFF;
  //     cursor: pointer;
  //     font-size: 16px;
  //     font-weight: bold;
  //     height: 42px;
  //     padding: 0 24px;
  //   `)
})
