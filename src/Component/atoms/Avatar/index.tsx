import { Avatar } from '@mui/material'
import { CSSProperties } from 'react'

export interface Props {
  src: string
  variant?: 'rounded' | 'square'
  style?: CSSProperties
}

const MuiAvatar: React.FC<Props> = ({ src, variant, style }) => {
  return (
    <div>
      <Avatar
        style={style}
        src={src}
        variant={variant}
        data-testid="PersonIcon"
      />
    </div>
  )
}

export default MuiAvatar
