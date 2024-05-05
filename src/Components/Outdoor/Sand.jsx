import { useTexture } from '@react-three/drei'

export default function Sand(props)
{
    const sandTextures = useTexture('./Textures/IslandBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.IslandMerge.geometry}
            position={[0, -0.146, 0]}
        >
            <meshBasicMaterial map={sandTextures} map-flipY={false} />
        </mesh>
    </>
}