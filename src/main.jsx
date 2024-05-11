import './index.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
        <Canvas
            camera={ {
                fov: 45,
                near: 0.2,
                far: 200,
                position: [3, 2, 6],
            } }
        >
            <Perf position="top-left" />
            <App />
        

        </Canvas>
)