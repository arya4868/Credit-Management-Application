import { render } from '@testing-library/react'
import NavContent from './index'
import '@testing-library/jest-dom/extend-expect'

describe('NavContent', () => {
  const props = {
    title: 'Test Title',
    desc: 'Test Description',
  }

  it('renders the title prop', () => {
    const { getByText } = render(<NavContent {...props} />)
    expect(getByText(props.title)).toBeInTheDocument()
  })

  it('renders the description prop', () => {
    const { getByText } = render(<NavContent {...props} />)
    expect(getByText(props.desc)).toBeInTheDocument()
  })
  it('renders the title and description correctly', () => {
    const { getByText } = render(<NavContent {...props} />)
    const titleElement = getByText(props.title)
    const descElement = getByText(props.desc)

    expect(titleElement).toBeInTheDocument()
    expect(descElement).toBeInTheDocument()
    //expect(titleElement.tagName).toEqual('H5')
    expect(titleElement).toHaveTextContent(props.title)
    expect(descElement).toHaveTextContent(props.desc)
  })
})
