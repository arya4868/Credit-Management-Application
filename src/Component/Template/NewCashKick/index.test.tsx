import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import { render, screen, fireEvent, getByTestId } from '@testing-library/react'

import NewCashKick from './index'

describe('NewCashKick component', () => {
  test('renders summary and slider table', () => {
    render(
      <MemoryRouter>
        <NewCashKick />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { name: /summary/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('slidertable')).toBeInTheDocument()
  })

  test('selects and deselects table rows', () => {
    render(
      <MemoryRouter initialEntries={['/route']}>
        <NewCashKick />
      </MemoryRouter>
    )

    const checkbox = screen.getAllByTestId('contract-a-checkbox')
    expect(checkbox[0]).toBeInTheDocument()
    fireEvent.click(checkbox[0])

    expect(checkbox[1]).toBeInTheDocument()
    fireEvent.click(checkbox[1])

    expect(checkbox[2]).toBeInTheDocument()
    fireEvent.click(checkbox[2])

    expect(checkbox[0]).not.toBeChecked()

    const amountSelected = screen.getByTestId('amount-selected')
    console.log(amountSelected)
    expect(amountSelected).toHaveTextContent('88800')
  })

  test('resets selected rows', () => {
    render(
      <MemoryRouter>
        <NewCashKick />
      </MemoryRouter>
    )

    const checkbox = screen.getByTestId('Maincheckbox')
    expect(checkbox).toBeInTheDocument()

    fireEvent.click(checkbox)

    const resetButton = screen.getByRole('button', { name: /reset/i })
    fireEvent.click(resetButton)

    expect(checkbox).not.toBeChecked()
    expect(screen.queryAllByRole('checkbox', { name: /row/i })).toHaveLength(0)
    const amountSelected = screen.getByTestId('amount-selected')
    expect(amountSelected).toHaveTextContent('0')
  })

  test('handles select all', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NewCashKick />
      </MemoryRouter>
    )
    const selectAllCheckbox = getByTestId('Maincheckbox')

    fireEvent.click(selectAllCheckbox)
    expect(selectAllCheckbox).not.toBeChecked()

    fireEvent.click(selectAllCheckbox)
    expect(selectAllCheckbox).toHaveValue()

    fireEvent.click(selectAllCheckbox)
    expect(selectAllCheckbox).not.toBeChecked()

    const totalAmount = screen.getByTestId('totalamount')
    expect(totalAmount).toHaveTextContent('0')
  })

  test('should select all items when "Select All" checkbox is checked', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <NewCashKick />
      </MemoryRouter>
    )

    const selectAllCheckbox = screen.getByTestId('Maincheckbox')
    fireEvent.click(selectAllCheckbox)

    const SelectedContract = screen.getByTestId('SelectedRow')
    expect(SelectedContract).toHaveTextContent('Selected Contracts0')

    const TotalAmount = screen.getByTestId('TotalAmountId')
    expect(TotalAmount).toHaveTextContent('Total Payout$ 0')
  })
})
