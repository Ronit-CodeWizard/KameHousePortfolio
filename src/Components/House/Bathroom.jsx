import { useTexture } from '@react-three/drei'

export default function Bathroom(props)
{
    const bathroomTextures = useTexture('./Textures/BathroomBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.BathroomMerge.geometry}
            position={[-1.559, 2.748, 0.024]}
            rotation={[0, -1.571, 0]}
        >
            <meshBasicMaterial map={bathroomTextures} map-flipY={false} />
        </mesh>
    </>
}