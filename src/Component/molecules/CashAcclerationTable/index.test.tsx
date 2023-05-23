import CashAccleration_Table from './index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('renders without crashing', () => {
  render(<CashAccleration_Table />)
  expect(screen.getByRole('table')).toBeInTheDocument()
})
it('displays the correct table header', () => {
  render(<CashAccleration_Table />)
  expect(screen.getByText('Name')).toBeInTheDocument()
  expect(screen.getByText('Status')).toBeInTheDocument()
  expect(screen.getByText('Type')).toBeInTheDocument()
  expect(screen.getByText('Per payment')).toBeInTheDocument()
  expect(screen.getByText('Total financed')).toBeInTheDocument()
  expect(screen.getByText('Total available')).toBeInTheDocument()
})
it('displays the correct table data', () => {
  render(<CashAccleration_Table />)
  expect(screen.getByText('Contract1')).toBeInTheDocument()
  expect(screen.getByText('Available')).toBeInTheDocument()
  expect(screen.getByText('Monthly')).toBeInTheDocument()
  expect(screen.getByText('$12,000.25')).toBeInTheDocument()
  expect(screen.getByText('-')).toBeInTheDocument()
  expect(screen.getByText('$126,722.64')).toBeInTheDocument()
})

it('renders the correct column headers', () => {
  render(<CashAccleration_Table />)
  const headerCells = screen.getAllByRole('columnheader')
  expect(headerCells[0]).toHaveTextContent('Name')
  expect(headerCells[1]).toHaveTextContent('Status')
  expect(headerCells[2]).toHaveTextContent('Type')
  expect(headerCells[3]).toHaveTextContent('Per payment')
  expect(headerCells[4]).toHaveTextContent('Total financed')
  expect(headerCells[5]).toHaveTextContent('Total available')
})
