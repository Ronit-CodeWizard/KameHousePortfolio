import { useTexture } from '@react-three/drei'

export default function Soap(props)
{
    const htmlTexture = useTexture('./Textures/html.jpg')
    const cssTexture = useTexture('./Textures/css.jpg')
    const pythonTexture = useTexture('./Textures/Python.jpg')
    const javascriptTexture = useTexture('./Textures/JavaScript.jpg')

    return <>
        <mesh
            geometry={props.nodes.LogoCss.geometry}
            position={[-3.684, 1.475, 2.366]}
            rotation={[Math.PI / 2, 0, -1.701]}
        >
            <meshBasicMaterial map={cssTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoHtml.geometry}
            position={[-3.56, 1.482, 0.302]}
            rotation={[Math.PI / 2, 0, -0.18]}
            scale={ 1.02 }
        >
            <meshBasicMaterial map={htmlTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoJS.geometry}
            position={[-2.563, 1.469, 3.468]}
            rotation={[Math.PI / 2, 0, -2.974]}
            scale={0.8}
        >
            <meshBasicMaterial map={javascriptTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.LogoPython.geometry}
            position={[-1.877, 1.869, 0.16]}
            rotation={[Math.PI / 2, 0, -0.1]}
        >
            <meshBasicMaterial map={pythonTexture} map-flipY={false} />
        </mesh>
    </>
}