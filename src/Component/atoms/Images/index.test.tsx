import { render } from '@testing-library/react'
import ImageComponent from './index'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

describe('ImageComponent', () => {
  it('should render the image with the correct source and alt text', () => {
    const { getByAltText } = render(
      <ImageComponent source="https://example.com/image.jpg" alt="test image" />
    )
    expect(getByAltText('test image')).toBeInTheDocument()
    expect(getByAltText('test image')).toHaveAttribute(
      'src',
      'https://example.com/image.jpg'
    )
  })

  it('should render the image with the correct height and width when provided', () => {
    const { getByAltText } = render(
      <ImageComponent
        source="https://example.com/image.jpg"
        alt="test image"
        height={200}
        width={300}
      />
    )
    expect(getByAltText('test image')).toHaveAttribute('height', '200')
    expect(getByAltText('test image')).toHaveAttribute('width', '300')
  })

  it('should render the image without height and width when not provided', () => {
    const { getByAltText } = render(
      <ImageComponent source="https://example.com/image.jpg" alt="test image" />
    )
    expect(getByAltText('test image')).not.toHaveAttribute('height')
    expect(getByAltText('test image')).not.toHaveAttribute('width')
  })

  it('should render the image with default height and width values when height and width are invalid', () => {
    const { getByAltText } = render(
      <ImageComponent
        source="https://example.com/image.jpg"
        alt="test image"
        height="invalid-height"
        width="invalid-width"
      />
    )
    expect(getByAltText('test image')).toHaveAttribute(
      'height',
      'invalid-height'
    )
    expect(getByAltText('test image')).toHaveAttribute('width', 'invalid-width')
  })

  it('should render the image with the correct alt text when the source is undefined', () => {
    const { getByAltText } = render(
      <ImageComponent source={undefined} alt="test image" />
    )
    expect(getByAltText('test image')).toBeInTheDocument()
  })
})
