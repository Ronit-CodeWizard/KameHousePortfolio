import { OrbitControls } from "@react-three/drei"

import Scene from './Components/Scene.jsx'

function App() {


  return (
    <>
      <OrbitControls/>

      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>
      
      <Scene/>

      
    </>
  )
}

export default App
