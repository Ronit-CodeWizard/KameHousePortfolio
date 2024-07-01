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
            position={[2.42, 2.559, 0.927]}
            rotation={[Math.PI / 2, 0, 3.001]}
        >
            <meshBasicMaterial map={reactTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoBlender.geometry}
            position={[1.65, 2.703, 2.75]}
            rotation={[Math.PI / 2, 0, -2.923]}
            scale={0.9}
            
        >
            <meshBasicMaterial map={blenderTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoSymfony.geometry}
            position={[3.619, 3.705, 3.5]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={1.1}
        >
            <meshBasicMaterial map={symfonyTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoThree.geometry}
            position={[3.012, 3.248, 3.505]}
            rotation={[Math.PI / 2, 0, 3.135]}
        >
            <meshBasicMaterial map={threeTexture} map-flipY={false} />
        </mesh>
    </>
}