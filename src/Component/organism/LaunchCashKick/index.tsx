import LaunchCashKickText from '../../molecules/LaunchCashKickText'
import LaunchCashKickButton from '../../molecules/LaunchCashKickButton'
import { LaunchCashKickCardStyle } from '../../../StyleComponent'


const LaunchCashKick = () => {
  return (
    <LaunchCashKickCardStyle>
      <LaunchCashKickText />
      <LaunchCashKickButton />
    </LaunchCashKickCardStyle>
  )
}

export default LaunchCashKick
