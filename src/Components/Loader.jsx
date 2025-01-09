import { Html, useProgress } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import "../Loader.css"

export default function Loader() {
  

  return (
    <Html fullscreen>
      <div className='carte'>        
        <img className='ship' src='./Textures/navire.png'/>
        <p className='text'>Land in sight ... imminent docking</p>
      </div>
    </Html>
  )
}