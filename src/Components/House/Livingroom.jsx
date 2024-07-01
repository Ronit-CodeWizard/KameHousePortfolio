import { useTexture } from '@react-three/drei'

export default function Livingroom(props)
{
    const livingroomTextures = useTexture('./Textures/LivingroomBaked2.jpg')

    return <>
        <mesh
            geometry={props.nodes.LivingroomMerge.geometry}
            position={[0.24, 1.89, -1.4]}
        >
            <meshBasicMaterial map={livingroomTextures} map-flipY={false} />
        </mesh>
    </>
}