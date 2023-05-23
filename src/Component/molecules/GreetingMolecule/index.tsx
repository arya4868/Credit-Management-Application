import ImageComponent from '../../atoms/Images'
import GreetImg from '../../../../public/Asset/Images/homepage.svg'

interface Props {
  height: number
  width: number
}
const GreetingMolecule = () => {
  return (
    <div>
      <div>
        <ImageComponent
          source={GreetImg}
          alt="GreetImg"
          height={262}
          width={1000}
        />
      </div>
    </div>
  )
}

export default GreetingMolecule
