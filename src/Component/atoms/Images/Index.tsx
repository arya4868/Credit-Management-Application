export interface ImageProps {
  source: string | undefined
  alt: string
  height?: number | string
  width?: number | string
}

const ImageComponent = (props: ImageProps) => {
  return (
    <img
      src={props.source}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  )
}

export default ImageComponent
