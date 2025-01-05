import './index.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import App from './App.jsx'

const isMobile = () => {

    console.log("Largeur = " + window.innerWidth)
    console.log("Hauteur = " + window.innerHeight)
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }



const root = ReactDOM.createRoot(document.querySelector('#root'))

const canvaForMobile = () =>
(
    <Canvas
        camera={{
        fov: 100,
        near: 0.1,
        far: 200,
        position: [52, 7, 12],
        }}
        
        >
        <App/>
    </Canvas>

)

const canvaForPC = () =>
(
    <Canvas
        camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [52, 7, 12],
    }}
    >
        <App/>
        <Perf position="top-left" />
    </Canvas>
    
)

root.render(

    isMobile() ? canvaForMobile() : canvaForPC()
)