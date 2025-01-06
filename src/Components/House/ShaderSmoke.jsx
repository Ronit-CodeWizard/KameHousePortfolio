import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import { DoubleSide, RepeatWrapping, Uniform } from "three";

import fragmentShader from '../../shaders/smoke/fragment.glsl'
import vertexShader from '../../shaders/smoke/vertex.glsl'

export default function ShaderSmoke() {

    const planeRef = useRef()

    const noiseTexture = useTexture("./Textures/noiseTexture.png")

    noiseTexture.wrapS = noiseTexture.wrapT = RepeatWrapping

    const smokeShaderMaterial = useMemo(() => ({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: new Uniform(0),
        uPerlinTexture: new Uniform(noiseTexture)
      }

    })) 
  
    useFrame(({ clock }) => {
      planeRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    });

    
    return <>
         <mesh position={[2.43, 2.76, 1]} ref={ planeRef }>
            <planeGeometry args={[0.1, 0.25]} />
           
            <shaderMaterial 
                attach="material" 
                args={[smokeShaderMaterial]}  
                transparent
                depthWrite={false}
                side={DoubleSide}
            />
        
        </mesh>
    
    </>

}