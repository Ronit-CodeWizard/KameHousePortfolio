import { useTexture } from '@react-three/drei'

export default function Lunchroom(props)
{
    const lunchroomTextures = useTexture('./Textures/LunchroomBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.LunchroomMerge.geometry}
            position={[0.7, 1.6, 0.4]}
        >
            <meshBasicMaterial map={lunchroomTextures} map-flipY={false} />
        </mesh>
    </>
}