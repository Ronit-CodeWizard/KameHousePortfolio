import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'

console.log("Hi if you notice a bug please contact me max2002guillon@gmail.com")


const isMobile = () => {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
    <StrictMode>
        <Canvas
            camera={{
            fov: isMobile() ? fovForMobile : fovForPc,
            near: 0.1,
            far: 200,
            position: [52, 7, 12],
        }}
        >
            <Suspense fallback={<Loader/>}>
                <App/>   
            </Suspense>

            {/*<Perf position="top-left" />*/}
        </Canvas>

        <Analytics/>
        <div style={{ display: "none" }}>
            <section>
            <h1>Maxime Guillon</h1>
            <h2>Creative Developer</h2>
            <h2>Computer Science Student at Bordeaux University</h2>
            </section>
            <section>
            <h2>Three.js Developer</h2>
            <h2>GSAP Developer</h2>
            <h2>3D Developer</h2>
            <h2>Web Developer</h2>
            </section>
            <section>
            <p>
                Bienvenue sur le portfolio de Maxime Guillon. Ce portfolio 3D a été
                réalisé à l'aide de Three.js et GSAP. La scène a été modélisée à l'aide
                de Blender.
            </p>
            </section>
        </div>

    </StrictMode>

        
    
)