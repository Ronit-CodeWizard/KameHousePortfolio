import { useTexture } from '@react-three/drei'

export default function Rock(props)
{
    const rockTextures = useTexture('./Textures/RockBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.RockMerge.geometry}
            position={[8.978, 0.211 , 8.994]}
            rotation={[0, -0.609, 0]}
            scale={0.751}
        >
            <meshBasicMaterial map={rockTextures} map-flipY={false} />
        </mesh>
    </>
}