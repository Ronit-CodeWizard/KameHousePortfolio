import { useTexture } from '@react-three/drei'

export default function MyWindows(props)
{
    const windowsTextures = useTexture('./Textures/WindowBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.WindowsMerge.geometry}
            position={[4.167, 2.987, 0.095]}
            rotation={[0, -0.125, 0]}
        >
            <meshBasicMaterial map={windowsTextures} map-flipY={false} />
        </mesh>
    </>
}