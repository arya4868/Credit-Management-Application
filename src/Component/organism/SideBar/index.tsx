import SeederLogo from '../../molecules/SeederLogo'
import HomeButton from '../../molecules/HomeButton'
import { Container } from '../../../StyleComponent'

const Sidebar = () => {
  return (
    <Container>
      <SeederLogo />
      <HomeButton></HomeButton>
    </Container>
  )
}

export default Sidebar
