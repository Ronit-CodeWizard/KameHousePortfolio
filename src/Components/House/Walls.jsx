import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Walls(props)
{  
    const [wallExtTexture, wallInTexture ] = useTexture(['./Textures/WallExt.jpg', './Textures/WallIn.jpg'])

    return <>
        <mesh
            geometry={props.nodes.WallExtMerge.geometry}
            position={[-0.006, 1.6, -4.011]}
            rotation={[0, 1.571, 0]}
        >
            <meshBasicMaterial map={wallExtTexture} map-flipY={false} side={ THREE.DoubleSide } />
        </mesh>

        <mesh
            geometry={props.nodes.WallInMerge.geometry}
            position={[0, 1.6, 3.9]}
        >
            <meshBasicMaterial map={wallInTexture} map-flipY={false} />
        </mesh>

    </>

    
    
}