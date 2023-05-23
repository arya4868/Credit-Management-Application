import Avataricon from '../../../../public/Asset/Images/avatar+icon.svg'
import theme from '../../../../Themes'
import {
  AvatarStyle,
  StyledMidSectionHeading,
  StyledMidSectionSubHeading,
} from '../../../StyleComponent'
import MuiTypography from '../../atoms/Typography'
import ImageComponent from '../../atoms/Images'
export {}

interface HeadingProps {
  title?: string
  desc?: string
}

const Heading = (props: HeadingProps) => {
  return (
    <StyledMidSectionHeading>
      <StyledMidSectionSubHeading>
        <MuiTypography color={theme.colors.TextColor} variant="subtitle1">
          {props.title}
        </MuiTypography>
        <MuiTypography color={theme.colors.DarkTextColor} variant="h3">
          {props.desc}
        </MuiTypography>
      </StyledMidSectionSubHeading>
      <AvatarStyle>
        <ImageComponent
          source={Avataricon}
          height={30}
          width={60}
          alt="avatar"
        ></ImageComponent>
      </AvatarStyle>
    </StyledMidSectionHeading>
  )
}

export default Heading
