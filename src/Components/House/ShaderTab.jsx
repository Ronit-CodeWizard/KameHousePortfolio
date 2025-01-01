import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";

import fragmentShader from '../../shaders/tab/fragment.glsl'
import vertexShader from '../../shaders/tab/vertex.glsl'

export default function ShaderTab(props) {

    const planeRef = useRef()

    const shaderMaterial = useMemo(() => ({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { value: 0 }
      }

    })) 
    
  
    
  
    useFrame(({ clock }) => {
      planeRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });

    
    return <>
         <mesh position={[0.1, 5.16, -2.4]} ref={ planeRef }>
            <planeGeometry args={[1.13, 0.4]} />
            <shaderMaterial 
                attach="material" 
                args={[shaderMaterial]}  
            />
        
            </mesh>
    
    </>

}