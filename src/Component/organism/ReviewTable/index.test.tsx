import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import ReviewTable from './index'

test('renders ReviewTable component without crashing', () => {
  render(<ReviewTable selectedData={[]} />)
})
test('renders table headers with correct column names', () => {
  const columnNames = [
    'Name',
    'Type',
    'Per Payment',
    'Term Length',
    'Payment accepted',
  ]
  render(<ReviewTable selectedData={[]} />)
  const tableHeaders = screen.getAllByRole('columnheader')
  tableHeaders.forEach((header, index) => {
    expect(header).toHaveTextContent(columnNames[index])
  })
})
test('renders table with custom styles', () => {
  const data = [
    {
      Name: 'John Smith',
      Type: 'Basic',
      PerPayment: 50,
      TermLength: 'Monthly',
      Payment: 100,
    },
  ]
  render(<ReviewTable selectedData={data} />)
  const table = screen.getByRole('table')
  expect(table).toHaveStyle({ background: 'rgb(38, 37, 41)' })
})
