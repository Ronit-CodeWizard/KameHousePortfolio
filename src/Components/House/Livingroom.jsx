import { useTexture } from '@react-three/drei'

export default function Livingroom(props)
{
    const livingroomTextures = useTexture('./Textures/LivingroomBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.LivingroomMerge.geometry}
            position={[1.611, 1.699, 2.841]}
            rotation={[Math.PI, -0.235, Math.PI]}
        >
            <meshBasicMaterial map={livingroomTextures} map-flipY={false} />
        </mesh>
    </>
}