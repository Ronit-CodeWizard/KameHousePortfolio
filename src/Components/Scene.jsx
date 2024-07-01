import { useGLTF } from '@react-three/drei'

import House from './House'
import Island from './Island'

import CameraScroll from './CameraScroll'

export default function Scene(props) {

    const { nodes } = useGLTF('./Model/House.glb')

    
    return <>
        <House nodes= { nodes }/>
        <Island nodes= { nodes } />
        <CameraScroll nodes= { nodes }/>
    
    </>

}