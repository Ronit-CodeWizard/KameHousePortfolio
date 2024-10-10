import { useTexture } from '@react-three/drei'

export default function Mug(props)
{
    const reactMugTexture = useTexture('./Textures/ReactMugBaked.jpg')
    const ThreejsMugTexture = useTexture('./Textures/ThreejsMugBaked.jpg')
    const SymfonyMugTexture = useTexture('./Textures/SymfonyMugBaked.jpg')
    const BlenderMugTexture = useTexture('./Textures/BlenderMugBaked.jpg')


    return <>
      <mesh
        geometry={props.nodes.ReactMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={reactMugTexture} map-flipY={false} />
      </mesh>

      <mesh
        geometry={props.nodes.ThreeJSMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={ThreejsMugTexture} map-flipY={false} />

      </mesh>

      <mesh        
        geometry={props.nodes.SymfonyMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={SymfonyMugTexture} map-flipY={false} />

      </mesh>
      
      <mesh    
        geometry={props.nodes.BlenderMug.geometry}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={BlenderMugTexture} map-flipY={false} />

      </mesh>
    </>
}