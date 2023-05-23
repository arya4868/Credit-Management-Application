import { render, screen } from '@testing-library/react'
import HeadingMolecule from './index'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()
describe('Heading_Molecule', () => {
  it('renders the text passed as a prop', () => {
    const text = 'This is a test'
    const { getByText } = render(<HeadingMolecule text={text} />)
    const textElement = getByText(text)
    expect(textElement).toBeInTheDocument()
  })
  it('displays the correct text passed as a prop', () => {
    const text = 'This is a test'
    const { getByText } = render(<HeadingMolecule text={text} />)
    const textElement = getByText(text)
    expect(textElement.textContent).toBe(text)
  })
})
