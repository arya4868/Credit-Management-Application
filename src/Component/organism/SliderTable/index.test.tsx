import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SliderTable from './index'

describe('SliderTable', () => {
  const tableData = [
    {
      id: 1,
      Name: 'Contract 1',
      Type: 'Monthly',
      PerPayment: 12000.25,
      TermLength: '12 months',
      Payment: 88800,
    },
    {
      id: 2,
      Name: 'Contract 2',
      Type: 'yearly',
      PerPayment: 13000.35,
      TermLength: '10 months',
      Payment: 88800,
    },
  ]

  const onHandleSelectAllMock = jest.fn()
  const onHandleChangeMock = jest.fn()

  beforeEach(() => {
    render(
      <SliderTable
        selectAll={false}
        selected={[1]}
        onHandleSelectAll={onHandleSelectAllMock}
        onHandleChange={onHandleChangeMock}
      />
    )
  })

  test('renders table header and data', () => {

    expect(screen.getByText('Your Contracts')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Type')).toBeInTheDocument()
    expect(screen.getByText('Per Payment')).toBeInTheDocument()
    expect(screen.getByText('Term Length')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()

    expect(screen.queryByText(tableData[0].Name)).toBeInTheDocument()

    const type = screen.getAllByText(tableData[0].Type)
    expect(type[0]).toBeInTheDocument()

    expect(screen.getByText(`$ ${tableData[0].PerPayment}`)).toBeInTheDocument()

    const termLengths = screen.getAllByText(tableData[0].TermLength)
    expect(termLengths[0]).toBeInTheDocument()

    const Payments = screen.getAllByText(`$ ${tableData[0].Payment}`)
    expect(Payments[0]).toBeInTheDocument()

    console.log(screen.debug())
  })

  test('selects all checkboxes', () => {
    const checkbox = screen.getByTestId('Maincheckbox')
    expect(checkbox).toBeInTheDocument()
  })

  test('selects a checkbox', () => {
    const checkbox = screen.getAllByTestId('contract-a-checkbox')
    expect(checkbox[0]).toBeInTheDocument()
    fireEvent.click(checkbox[0])
  })
})
