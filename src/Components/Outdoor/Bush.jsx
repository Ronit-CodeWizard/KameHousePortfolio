import { useTexture } from '@react-three/drei'

export default function Bush(props)
{
    const bushTextures = useTexture('./Textures/BushBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.BushMerge.geometry}
            position={[0.648, 6.028, 6.409]}
            rotation={[0, 0.506, 0]}
        >
            <meshBasicMaterial map={bushTextures} map-flipY={false} />
        </mesh>
    </>
}