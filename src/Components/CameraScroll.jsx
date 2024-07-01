import { useLayoutEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useTexture } from '@react-three/drei'


import gsap from 'gsap'

export default function CameraScroll(props) {

    const DoorTexture = useTexture('./Textures/DoorBaked.jpg')

    const camera = useThree((state) => state.camera);
    
    const doorRef = useRef()
    const tlRef = useRef()
 
    const scroll = useScroll()

    useFrame((state, delta) => {
        tlRef.current.seek(scroll.offset * tlRef.current.duration())
    })

    useLayoutEffect(() => {
        tlRef.current = gsap.timeline()

        // GO TO DOOR
        tlRef.current.to(
            camera.position,
            {
                
                duration: 2,
                x: 7.7,
                y: 3,
                z: -2.5,     
     
            },           
        ) 
        tlRef.current.to(
            camera.rotation,
            {               
                x: 0, 
                y: Math.PI/2,     
                z:0,        
            
            }, "<60%"           
        ) 
        //OPEN DOOR
        tlRef.current.to(
            doorRef.current.rotation,
            {
                duration: 2,
                y: -Math.PI/2,
                         
            },           
        )      

        //FO THROUGH THE DOOR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 3.4
            }
        )

        //GO TO REACT MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.3,
                y: 2.6,
                z: 0.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        // GO TO SYMFONY/THREEJS MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 3.3,
                y: 3.6,
                z: 2.3,
            }
        )

        //GO TO BLENDER MUG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 1.8,
                y: 2.7,
                z: 2.4,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/4,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO IN BATHROOM
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0,
                y: 3,
                z: 1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO PYTHON SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -1.38,
                y: 3,
                z: 0.8,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 
        //GO TO HTML SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 2.5,
                z: 1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/4,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO CSS SOAP
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3,
                y: 2.5,
                z: 2.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO JS SOAP
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -2.4,
                y: 2.5,
                z: 3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 5*Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 

        //EXIT BATHROOM
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -1.8,
                y: 3,
                z: 1.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.5,
                y: 3,
                z: 1.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: Math.PI*2,  
                z: 0,           
            
            }, "<"          
        ) 


        //GO TO THEEJS JOURNEY CERTIFICATION 
         tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 2.9,
                z: -1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: (5*Math.PI)/2,  
                z: 0,           
            
            }, "<"          
        ) 

        // GO TO THE STAIR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 2.9,
                z: -3.2,
            }
        )

        //GO TO TROPHEES
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -2.9,
                y: 3.9,
                z: -3.2,
            }
        )

        //GO NEXT FLOOR
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 5.2,
                z: -1.3,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO THE BEDROOM
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.3,
                y: 5.2,
                z: 0,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: (7*Math.PI)/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO SHADER PAINT

        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0,
                y: 5.2,
                z: -1.4,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 4*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO SHADER CLOUD
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.5,
                y: 4.7,
                z: -1.4,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 7*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO VINYL
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 2.5,
                y: 5.2,
                z: 0,
            }
        )

        //GO TO BOXING BAG
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.3,
                y: 5.2,
                z: -1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 19*Math.PI/6,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO FOOTBALL BALL
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -0.7,
                y: 4.5,
                z: 0.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO THE STAIRS
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.2,
                y: 5.1,
                z: 0.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 2*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 

        //DOWN THE STAIRS
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: -3.2,
                y: 3.4,
                z: -3.2,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 3*Math.PI/2,  
                z: 0,           
            
            }, "<"          
        ) 

        //GO TO TV
        tlRef.current.to(
            camera.position,
            {
                duration: 2,
                x: 0.5,
                y: 2.4,
                z: -2.1,
            }
        )
        tlRef.current.to(
            camera.rotation,
            {          
                duration: 2,     
                x: 0, 
                y: 2*Math.PI,  
                z: 0,           
            
            }, "<"          
        ) 
  

        
        
       

    }, [])

    return <>
        <group 
            ref={ doorRef } 
            position={[3.976, 1.618, -1.95]}
        >
            <mesh          
                geometry={props.nodes.DoorMerge.geometry}                  
            >
                <meshBasicMaterial map={DoorTexture} map-flipY={false} />
            </mesh>
        </group>        
    </>
    

}
