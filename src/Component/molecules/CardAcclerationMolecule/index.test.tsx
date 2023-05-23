import { render } from '@testing-library/react'
import CardAcclerationMolecule from './index'
import '@testing-library/jest-dom/extend-expect'

describe('CardAcclerationMolecule', () => {
  it('renders the text and value props', () => {
    const { getByText } = render(
      <CardAcclerationMolecule text="Text" value="Value" />
    )
    expect(getByText('Text')).toBeInTheDocument()
    expect(getByText('Value')).toBeInTheDocument()
  })

  it('renders the image if a source prop is provided', () => {
    const { getByAltText } = render(
      <CardAcclerationMolecule text="Text" value="Value" source="image.png" />
    )
    expect(getByAltText('')).toBeInTheDocument()
  })
  it('renders the text with the correct font size and color', () => {
    const { getByText } = render(
      <CardAcclerationMolecule text="Text" value="Value" />
    )
    expect(getByText('Text')).toHaveStyle(' font-size: 1rem;')
  })
})
