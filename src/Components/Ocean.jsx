import { useTexture } from '@react-three/drei';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

export default function Ocean()
{
    const oceanRef = useRef();
    const waterNormals = useTexture('./Textures/waternormals.jpg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const gl = useThree((state) => state.gl);

    useFrame(
        (state, delta) => (oceanRef.current.material.uniforms.time.value += delta * 0.3)
      );


    return <>
        <water
            ref={oceanRef}
            args={[
                new THREE.PlaneGeometry(10000, 10000),
                {
                    textureWidth: 512,
                    textureHeight: 512,
                    waterNormals,
                    sunDirection: new THREE.Vector3(),
                    sunColor: 0xeb8934,
                    waterColor: 0x00f6682,
                    distortionScale: 40,
                    fog: false,
                    format: gl.encoding,
                },
                
            ]}
            rotation-x={-Math.PI / 2}
            position={[0, 0, 0]}
        />
    </>

}