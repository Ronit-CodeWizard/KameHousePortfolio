import { useTexture } from '@react-three/drei';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { RepeatWrapping, PlaneGeometry, Vector3 } from 'three';

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ Water });

export default function Ocean()
{
    const oceanRef = useRef();
    const waterNormals = useTexture('./Textures/waternormals.jpg')
    waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
    const gl = useThree((state) => state.gl);

    useFrame(({ clock }) => {
        oceanRef.current.material.uniforms.time.value = clock.getElapsedTime() * 0.4;
    });


    return <>
        <water
            ref={oceanRef}
            args={[
                new PlaneGeometry(200, 300),
                {
                    textureWidth: 64,
                    textureHeight: 64,
                    waterNormals,
                    sunDirection: new Vector3(0),
                    sunColor: 0xeb8934,
                    waterColor: 0x00f6682,
                    distortionScale: 5,
                    fog: false,
                    //format: gl.encoding,
                },
                
            ]}
            rotation-x={-Math.PI / 2}
        />
    </>

}