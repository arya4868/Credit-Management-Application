import AvatarMolecule from '../../molecules/AvatarMolecule'
import { styled } from '@mui/material'
import arrowdown from '../../../../public/Asset/Images/arrow-bottom.svg'
import ImageComponent from '../../atoms/Images'
const StyledAvatar = styled('div')({
  position: 'absolute',
  top: '30%',
  left: '80%',
})
const AvatarOrg = () => {
  return (
    <StyledAvatar style={{ display: 'flex' }}>
      <AvatarMolecule />
      <ImageComponent source={arrowdown} alt="arrowdown" />
    </StyledAvatar>
  )
}

export default AvatarOrg
