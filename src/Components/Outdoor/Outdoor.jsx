import { useTexture } from '@react-three/drei'

export default function Outdoor(props)
{
    const outdoorTextures = useTexture('./Textures/OutdoorBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.OutdoorMerge.geometry}
            position={[6.459, 1.187, 1.473]}
            rotation={[0, -0.918, 0]}
        >
            <meshBasicMaterial map={outdoorTextures} map-flipY={false} />
        </mesh>
    </>
}