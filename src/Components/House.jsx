import { useGLTF } from '@react-three/drei'

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
import MugLogo from './House/MugLogo'
import Soap from './House/Soap'

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
      <MugLogo nodes= { props.nodes } />
      <Soap nodes= { props.nodes } />
   
    </group>
  )
}

useGLTF.preload('/House.glb')
