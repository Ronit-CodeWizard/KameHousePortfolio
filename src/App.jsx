import { OrbitControls } from "@react-three/drei"
function App() {


  return (
    <>
      <OrbitControls/>

      <directionalLight position={ [1, 2, 3] } intensity={ 2.5 }/>
      <mesh>
        <boxGeometry scale={ 1.5 }/>
        <meshStandardMaterial color="mediumpurple"/>
      </mesh>

      
    </>
  )
}

export default App
