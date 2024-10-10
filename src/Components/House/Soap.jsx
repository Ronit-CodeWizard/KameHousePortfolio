import { useTexture } from '@react-three/drei'

export default function Soap(props)
{
    const htmlTexture = useTexture('./Textures/HtmlSoapBaked.jpg')
    const cssTexture = useTexture('./Textures/CssSoapBaked.jpg')
    const pythonTexture = useTexture('./Textures/PyhonSoapBaked.jpg')
    const javascriptTexture = useTexture('./Textures/JavascriptSoapBaked.jpg')

    return <>
        <mesh
            geometry={props.nodes.CssSoap.geometry}
            position={[0, 1, 0]}
        >
            <meshBasicMaterial map={cssTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.HtmlSoap.geometry}
            position={[0, 1, 0]}
        >
            <meshBasicMaterial map={htmlTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.JavascriptSoap.geometry}
            position={[0, 1, 0]}
        >
            <meshBasicMaterial map={javascriptTexture} map-flipY={false} />
        </mesh>

        <mesh
            geometry={props.nodes.PythonSoap.geometry}
            position={[0, 1, 0]}
        >
            <meshBasicMaterial map={pythonTexture} map-flipY={false} />
        </mesh>
    </>
}