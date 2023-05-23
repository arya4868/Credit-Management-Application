import ImageComponent from '../../atoms/Images'
import { Stack } from '@mui/material'
import MuiTypography from '../../atoms/Typography'
import receitText from '../../../../public/Asset/Images/receipt-text.svg'
import tag from '../../../../public/Asset/Images/tag.svg'
import infoCircle from '../../../../public/Asset/Images/info-circle.svg'
import theme from '../../../../Themes'
import { StyledReport } from '../../../StyleComponent'

const ReportCard = () => {
  return (
    <StyledReport>
      <Stack sx={{ marginLeft: '160px' }}>
        <ImageComponent source={tag} alt="tag" />
      </Stack>
      <ImageComponent source={receitText} alt="Receipt text" />
      <Stack sx={{ marginTop: '30px' }}>
        <Stack direction={'row'} spacing={2}>
          <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
            Due- May 01,2023
          </MuiTypography>
          <ImageComponent source={infoCircle} alt="infoCircle" />
        </Stack>
        <MuiTypography color={theme.colors.TextColor} variant="h2">
          $15,200.55
        </MuiTypography>
      </Stack>
    </StyledReport>
  )
}

export default ReportCard
