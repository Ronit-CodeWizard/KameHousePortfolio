import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";

import { Uniform } from "three";

import fragmentShader from '../../shaders/tab/fragment.glsl'
import vertexShader from '../../shaders/tab/vertex.glsl'


export default function ShaderTab(props) {

    const planeRef = useRef()

    const tabShaderMaterial = useMemo(() => ({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new Uniform(0)
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
                args={[tabShaderMaterial]}  
            />
        
            </mesh>
    
    </>

}