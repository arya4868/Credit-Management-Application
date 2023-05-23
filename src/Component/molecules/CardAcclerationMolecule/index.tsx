import React from 'react'
import MuiTypography from '../../atoms/Typography'
import ImageComponent from '../../atoms/Images'
import Stack from '@mui/material/Stack'
import { StyledCardTypo } from '../../../StyleComponent'

type props = {
  text: string
  value: string
  source?: string
}
const CardAcclerationMolecule: React.FC<props> = ({ text, value, source }) => {
  return (
    <div>
      <Stack direction="column" spacing={6}>
        <Stack>
          <StyledCardTypo>
            <ImageComponent source={source} alt="" height="70px" />
          </StyledCardTypo>
        </Stack>
        <Stack spacing={0}>
          <StyledCardTypo
            style={{ fontWeight: '300', fontSize: '8px', color: '#C9C8CC' }}
          >
            <MuiTypography>{text}</MuiTypography>
          </StyledCardTypo>

          <StyledCardTypo
            style={{ fontWeight: '500', fontSize: '18px', color: 'white' }}
          >
            <MuiTypography>{value}</MuiTypography>
          </StyledCardTypo>
        </Stack>
      </Stack>
    </div>
  )
}

export default CardAcclerationMolecule
