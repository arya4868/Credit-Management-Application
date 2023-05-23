import Avatar from '../../atoms/Avatar'
import avatar from '../../../../public/Asset/Images/avatar+icon.svg'

const AvatarMolecule = () => {
  return (
    <div>
      <Avatar
        src={avatar}
        variant="rounded"
        style={{
          borderRadius: '40%',
        }}
      ></Avatar>
    </div>
  )
}

export default AvatarMolecule
