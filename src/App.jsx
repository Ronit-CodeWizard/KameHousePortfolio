import { useGLTF, Sky, Float, Text, ScrollControls, OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

import Scene from './Components/Scene.jsx'
import Ocean from "./Components/Ocean.jsx"

function App() {
  
  return (
    <>

      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>
          
      <ScrollControls pages={10} damping={0.1}>
      

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
      </ScrollControls>
     


      
    </>
  )
}

export default App
