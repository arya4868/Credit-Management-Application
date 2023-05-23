import { Typography } from '@mui/material'

export interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'subtitle1'
    | 'subtitle2'
  children: React.ReactNode
  color?: string
}
const MuiTypography = (props: TypographyProps) => {
  return (
    <div>
      <Typography color={props.color} variant={props.variant}>
        {props.children}
      </Typography>
    </div>
  )
}
export default MuiTypography
