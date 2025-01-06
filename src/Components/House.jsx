import Walls from './House/Walls'
import Roof from './House/Roof'
import Kitchen from './House/Kitchen'
import Bedroom from './House/Bedroom'
import Livingroom from './House/Livingroom'
import Lunchroom from './House/Lunchroom'
import Bathroom from './House/Bathroom'
import Floor from './House/Floor'
import MyWindows from './House/MyWindows'
import VinylsCovers from './House/VinylsCovers'
import Mug from './House/Mug'
import Soap from './House/Soap'
import ShaderTab from './House/ShaderTab'
import ShaderParticles from './House/ShaderParticles'
import ShaderSmoke from './House/ShaderSmoke'

export default function House(props) {

  return (
    <group {...props} dispose={null}>     

      <Walls nodes={ props.nodes }/>
      <Roof nodes= { props.nodes} />
      <Kitchen nodes={ props.nodes } />
      <Bedroom nodes={ props.nodes } />
      <Livingroom nodes= { props.nodes } />
      <Lunchroom nodes= { props.nodes } />
      <Bathroom nodes= { props.nodes } />
      <Floor nodes= { props.nodes } />
      <MyWindows nodes= { props.nodes } />
      <VinylsCovers nodes= { props.nodes } />
      <Mug nodes= { props.nodes } />
      <Soap nodes= { props.nodes } />
      <ShaderTab/> 
      <ShaderParticles />
      <ShaderSmoke/>

      
   
    </group>
  )
}
