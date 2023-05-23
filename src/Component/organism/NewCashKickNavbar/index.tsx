import theme from '../../../../Themes'
import Heading from '../../molecules/TableNavBar'
import { TextBoxStyle, UpperMidSectionStyle } from '../../../StyleComponent'
import MuiTypography from '../../atoms/Typography'

const NewCashKickNavBar = () => {
  return (
    <UpperMidSectionStyle>
      <Heading
        title="New Cash Kick"
        desc="Let’s setup a new cash kick to power your Saas"
      ></Heading>
      <TextBoxStyle
        style={{
          background: theme.colors.OrganismBackground,
          border: theme.colors.OrganismBorder,
        }}
      >
        <MuiTypography color={theme.colors.TextColor} variant="button">
          ← Back
        </MuiTypography>
      </TextBoxStyle>
    </UpperMidSectionStyle>
  )
}

export default NewCashKickNavBar
