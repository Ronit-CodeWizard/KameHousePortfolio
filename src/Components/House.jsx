import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import Walls from './House/Walls'
import Roof from './House/Roof'
import Kitchen from './House/Kitchen'
import Bedroom from './House/Bedroom'
import Livingroom from './House/Livingroom'
import Lunchroom from './House/Lunchroom'
import Bathroom from './House/Bathroom'
import Floor from './House/Floor'
import Wibdows from './House/MyWindows'
import MyWindows from './House/MyWindows'

export default function House(props) {


    const [islandTextures, roofTextures] = useTexture(['./Textures/IslandBaked.jpg', './Textures/HugeRoofBaked.jpg'])

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
   
    </group>
  )
}

useGLTF.preload('/House.glb')
