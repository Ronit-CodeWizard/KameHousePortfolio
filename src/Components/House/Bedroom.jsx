import { useTexture } from '@react-three/drei'

export default function Bedroom(props)
{
    const bedroomTextures = useTexture('./Textures/BedroomBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.BedroomMerge.geometry}
            position={[2.9, 4.139, -0.1]}
            rotation={[0, -1.571, 0]}
        >
            <meshBasicMaterial map={bedroomTextures} map-flipY={false} />
        </mesh>
    </>
}