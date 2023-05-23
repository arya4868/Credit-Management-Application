import ImageComponent from '../../atoms/Images'
import { Button, Stack } from '@mui/material'
import MuiTypography from '../../atoms/Typography'
import Circular from '../../../../public/Asset/Images/circular-progress.svg'
import infoCircle from '../../../../public/Asset/Images/info-circle.svg'
import theme from '../../../../Themes'
import { StyledReport1 } from '../../../StyleComponent'
import { useLocation } from 'react-router'

const ReportCard = () => {
  const location = useLocation()
  const paybackamount = location.state?.paybackamount

  let value: number
  if (paybackamount === undefined) {
    value = 888000
  } else {
    value = 888000 - paybackamount
  }
  return (
    <StyledReport1>
      <ImageComponent source={Circular} alt="Circular Progress" />
      <Stack>
        <Stack direction={'row'} spacing={2}>
          <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
            Outstanding Amount
          </MuiTypography>
          <ImageComponent source={infoCircle} alt="Receipt text" />
        </Stack>

        <Stack>
          <MuiTypography color={theme.colors.TextColor} variant="h2">
            {`$ ${value}`}
          </MuiTypography>
        </Stack>
      </Stack>
    </StyledReport1>
  )
}

export default ReportCard
