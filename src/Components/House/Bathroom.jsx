import { useTexture } from '@react-three/drei'

export default function Bathroom(props)
{
    const bathroomTextures = useTexture('./Textures/BathroomBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.bathroomMerge.geometry}
            position={[-3.679, 2.489, 2.366]}
            rotation={[Math.PI / 2, 0, -1.504]}
        >
            <meshBasicMaterial map={bathroomTextures} map-flipY={false} />
        </mesh>
    </>
}