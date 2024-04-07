import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Floor(props)
{
    const floorTextures = useTexture('./Textures/HDFloorBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.FloorMerge.geometry}
        >
            <meshBasicMaterial map={floorTextures} map-flipY={false} side={ THREE.DoubleSide }/>

        </mesh>
    </>
}