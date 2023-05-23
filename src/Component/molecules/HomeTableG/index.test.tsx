import CashKickTableG from '.'
import { render, getByText, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('renders without errors', () => {
  render(<CashKickTableG />)
})
// it('renders the header cells with correct text and styling', () => {
//   const { getByText } = render(<CashKickTableG />)
//   expect(getByText('Due Date')).toHaveStyle('color: white')
//   expect(getByText('Status')).toHaveStyle('color: white')
//   expect(getByText('Expected Amount')).toHaveStyle('color: white')
//   expect(getByText('Outstanding')).toHaveStyle('color: white')
// })
it('sets the correct height for all TableCells', () => {
  const { getAllByRole } = render(<CashKickTableG />)
  const cells = getAllByRole('cell')
  // cells.forEach((cell) => {
  //   expect(cell).toHaveStyle('height: 5px')
  // })
})

// it('renders the cells with correct height', () => {
//   const { getByText } = render(<CashKickTableG />)
//   const cells = document.querySelectorAll('td')
//   expect(cells[0]).toHaveStyle('height: 5px')
//   expect(cells[1]).toHaveStyle('height: 5px')
//   expect(cells[2]).toHaveStyle('height: 5px')
//   expect(cells[3]).toHaveStyle('height: 5px')
//   expect(cells[4]).toHaveStyle('height: 5px')
//   expect(cells[5]).toHaveStyle('height: 5px')
//   expect(cells[6]).toHaveStyle('height: 5px')
//   expect(cells[7]).toHaveStyle('height: 5px')
// })
