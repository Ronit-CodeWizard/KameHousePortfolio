import { useTexture } from '@react-three/drei'

export default function Roof(props)
{
    const roofTexture = useTexture('./Textures/HugeRoofBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.RoofMerge.geometry}
            position={[4.1, 5.903, 0]}
            rotation={[-0.522, 0, 0]}
        >
            <meshBasicMaterial map={roofTexture} map-flipY={false} />
        </mesh>
    </>
}