import {Sky, Float, Text, ScrollControls, useGLTF } from "@react-three/drei"

import Scene from './Components/Scene.jsx'
import Ocean from "./Components/Ocean.jsx"
import OverlayScroll from "./Components/OverlayScroll.jsx"
import CameraScroll from './Components/CameraScroll.jsx'

import "./App.css";


export default function App() {

  const { nodes } = useGLTF('./Model/House.glb')
  
  return (
    <>

      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>

      <Ocean/>
      <Sky sunPosition={[1, 0.1, 1]}/>
      
      <Float rotationIntensity={0.9}>
          <Text
            font="./fonts/font.ttf"
            position-y={ 15 }
            rotation-y={ 0.48 * Math.PI }
            curveRadius={ -50 }
            fontSize={ 5 }
          >
            Maxime's Portfolio
        </Text>
      </Float>

      <Scene nodes= { nodes }/>
     
          
      <ScrollControls pages={15} damping={0.2}>       
    
        <CameraScroll nodes= { nodes }/>
        {/* <OverlayScroll/>*/}
        
      </ScrollControls>
      
    </>
  )
}
