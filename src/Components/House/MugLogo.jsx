import { useTexture } from '@react-three/drei'

export default function MugLogo(props)
{
    const reactTexture = useTexture('./Textures/react.jpg')
    const blenderTexture = useTexture('./Textures/blender.jpg')
    const symfonyTexture = useTexture('./Textures/symfony.jpg')
    const threeTexture = useTexture('./Textures/three.jpg')

    return <>
        <mesh
            geometry={props.nodes.LogoReact.geometry}
            position={[2.42, 1.559, 0.927]}
            rotation={[Math.PI / 2, 0, 3.001]}
        >
            <meshBasicMaterial map={reactTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoBlender.geometry}
            position={[1.621, 1.703, 2.782]}
            rotation={[Math.PI / 2, 0, -2.923]}
        >
            <meshBasicMaterial map={blenderTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoSymfony.geometry}
            position={[3.619, 2.705, 3.496]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={0.4}
        >
            <meshBasicMaterial map={symfonyTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoThreejs.geometry}
            position={[3.012, 2.248, 3.499]}
            rotation={[Math.PI / 2, 0, 3.135]}
        >
            <meshBasicMaterial map={threeTexture} map-flipY={false} />
        </mesh>
    </>
}