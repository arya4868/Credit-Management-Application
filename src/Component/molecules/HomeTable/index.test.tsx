import React from 'react'
import { render } from '@testing-library/react'
import CashKickTable from './index'
import '@testing-library/jest-dom/extend-expect'

describe('CashKick_Table', () => {
  it('renders the table headers', () => {
    const { getByText } = render(<CashKickTable />)
    expect(getByText('Due Date')).toBeInTheDocument()
    expect(getByText('Status')).toBeInTheDocument()
    expect(getByText('Expected Amount')).toBeInTheDocument()
    expect(getByText('Outstanding')).toBeInTheDocument()
  })
})
it('renders the correct data in the table rows', () => {
  const { getByText } = render(<CashKickTable />)
  expect(getByText('Due Date')).toBeInTheDocument()
  expect(getByText('Status')).toBeInTheDocument()
  expect(getByText('Expected Amount')).toBeInTheDocument()
})
it('renders the correct number of rows', () => {
  const { getAllByRole } = render(<CashKickTable />)
  const rows = getAllByRole('row')
  expect(rows).toHaveLength(2)
})
