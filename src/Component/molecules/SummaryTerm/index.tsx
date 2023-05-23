import MuiTypography from '../../atoms/Typography'
import {
  SelectedStyle,
  TermSelectedStyle,
  TermStyle,
} from '../../../StyleComponent'
import theme from '../../../../Themes'

interface TermProps {
  Selected_Row: number[]
}

const Term = (props: TermProps) => {
  return (
    <TermSelectedStyle data-testid="SelectedRow">
      <TermStyle>
        <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
          Term
        </MuiTypography>

        <MuiTypography color={theme.colors.TextColor} variant="body1">
          12months
        </MuiTypography>
      </TermStyle>

      <SelectedStyle>
        <MuiTypography color={theme.colors.DarkTextColor} variant="body1">
          Selected Contracts
        </MuiTypography>

        <MuiTypography color={theme.colors.TextColor} variant="body1">
          {props.Selected_Row?.length}
        </MuiTypography>
      </SelectedStyle>
    </TermSelectedStyle>
  )
}

export default Term
