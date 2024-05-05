import { useTexture } from '@react-three/drei'

export default function Kitchen(props)
{
    const kitchenTexture = useTexture('./Textures/KitchenBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.KitchenMerge.geometry}
            position={[2.181, 1.721, 2.601]}
            rotation={[0, 1.571, 0]}
        >
            <meshBasicMaterial map={kitchenTexture} map-flipY={false} />
        </mesh>
    </>
}