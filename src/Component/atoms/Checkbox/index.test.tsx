import { render, fireEvent } from '@testing-library/react'
import MyCheckbox from './index'
import '@testing-library/jest-dom'

describe('MyCheckbox component', () => {
  const onChangeMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the label correctly', () => {
    const { getByText } = render(
      <MyCheckbox
        label="Test Checkbox"
        checked={false}
        onChange={onChangeMock}
      />
    )
    expect(getByText('Test Checkbox')).toBeInTheDocument()
  })

  it('should toggle the checked state when clicked', () => {
    const { getByLabelText } = render(
      <MyCheckbox
        label="Test Checkbox"
        checked={false}
        onChange={onChangeMock}
      />
    )
    const checkbox = getByLabelText('Test Checkbox')

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(true)

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(onChangeMock).toHaveBeenCalledTimes(2)
    expect(onChangeMock).toHaveBeenCalledWith(false)
  })

  it('should set the checked state to the initial value', () => {
    const { getByLabelText } = render(
      <MyCheckbox
        label="Test Checkbox"
        checked={true}
        onChange={onChangeMock}
      />
    )
    const checkbox = getByLabelText('Test Checkbox')
    expect(checkbox).toBeChecked()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByLabelText } = render(
      <MyCheckbox
        label="Test Checkbox"
        checked={false}
        onChange={onChangeMock}
        disabled={true}
      />
    )
    const checkbox = getByLabelText('Test Checkbox')
    expect(checkbox).toBeDisabled()
  })
})
