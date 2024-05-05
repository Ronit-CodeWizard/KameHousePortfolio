import { OrbitControls, useGLTF, Sky } from "@react-three/drei"

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
        distance={100000000}
         
      />
      
      <Scene/>
      <Ocean/>


      
    </>
  )
}

export default App
