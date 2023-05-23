import { Container, Typography } from '@mui/material'
import ImageComponent from '../../atoms/Images'
import MuiTypography from '../../atoms/Typography'
import { styled } from '@mui/material/styles'
import seederLogo from '../../../../public/Asset/Images/SeederLogo.svg'

export const StyledTypo = styled('div')({
  width: '164.12px',
  height: '32px',

  marginLeft: '20px',

  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '30px',
  display: 'flex',
  alignItems: 'flex-end',
  color: '#E8E7F0',
  flex: 'none',
  order: '1',
  flexGrow: '1',
})

const SeederLogo = () => {
  return (
    <div>
      <Container sx={{ display: 'flex' }}>
        <ImageComponent source={seederLogo} alt="LOGO" height={25} width={25} />
        <StyledTypo>
          <MuiTypography variant="h5">Seeder</MuiTypography>
        </StyledTypo>
      </Container>
    </div>
  )
}

export default SeederLogo
