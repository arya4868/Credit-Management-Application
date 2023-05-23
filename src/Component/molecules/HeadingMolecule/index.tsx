import React from 'react'
import MuiTypography from '../../atoms/Typography'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import theme from '../../../../Themes'
import { PriceHeadigStyle } from '../../../StyleComponent'


type props = {
  text: string
}

const HeadingMolecule: React.FC<props> = ({ text }) => {
  return (
    <div>
      <PriceHeadigStyle>
        <MuiTypography variant="h2" color={theme.colors.TextColor}>
          {text}
        </MuiTypography>

        <InfoOutlinedIcon
          sx={{ marginBottom: '-5px', marginLeft: '10px', color: 'grey' }}
        ></InfoOutlinedIcon>
      </PriceHeadigStyle>
    </div>
  )
}

export default HeadingMolecule
