import { useGLTF, Sky, Float, Text, OrbitControls } from "@react-three/drei"

import Scene from './Components/Scene.jsx'
import Ocean from "./Components/Ocean.jsx"

function App() {
  const { nodes } = useGLTF('./Model/House.glb')


  return (
    <>

      <OrbitControls/>
      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>

      <Sky 
        sunPosition={[1, 0.1, 1]}         
      />
    
    <Float
    rotationIntensity={0.7}
    >
        <Text
          font="./fonts/font.ttf"
          position-y={ 15 }
          rotation-y={ 0.4166666667 * Math.PI }
          curveRadius={ -50 }
          fontSize={ 5 }
        >
          Maxime's Portfolio
        </Text>
        </Float>
   
      <Scene/>
      <Ocean/>


      
    </>
  )
}

export default App
