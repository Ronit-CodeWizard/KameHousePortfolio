import { useTexture } from '@react-three/drei'

export default function Lunchroom(props)
{
    const lunchroomTextures = useTexture('./Textures/LunchroomBaked2.jpg')

    return <>
        <mesh
            geometry={props.nodes.LunchroomMerge.geometry}
            position={[1.611, 2.699, 2.841]}
            rotation={[Math.PI, -0.257, Math.PI]}
        >
            <meshBasicMaterial map={lunchroomTextures} map-flipY={false} />
        </mesh>
    </>
}