import React from 'react'
import { render } from '@testing-library/react'
import Heading from './index'
import '@testing-library/jest-dom/extend-expect'

test('renders heading component with title and description', () => {
  const title = 'Title'
  const desc = 'Description'
  const { getByText } = render(<Heading title={title} desc={desc} />)
  const titleElement = getByText(title)
  const descElement = getByText(desc)
  expect(titleElement).toBeInTheDocument()
  expect(descElement).toBeInTheDocument()
})
test('renders avatar image in heading component', () => {
  const title = 'Title'
  const desc = 'Description'
  const { getByAltText } = render(<Heading title={title} desc={desc} />)
  const avatarImage = getByAltText('avatar')
  expect(avatarImage).toBeInTheDocument()
})
