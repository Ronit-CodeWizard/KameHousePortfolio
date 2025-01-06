import { useRef, useEffect, useMemo } from 'react'
import { useGSAP } from '@gsap/react'

import { TorusGeometry, DodecahedronGeometry, BoxGeometry, TorusKnotGeometry, Float32BufferAttribute, Uniform, Vector2, Color,BufferAttribute, AdditiveBlending } from 'three'
import gsap from 'gsap'

import vertexShader from '../../shaders/particles/vertex.glsl'
import fragmentShader from '../../shaders/particles/fragment.glsl'

export default function Particle()
{
    const pointsRef = useRef()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2)
    }

    const particles = {}
    particles.index = 0
    particles.nextIndex = 1
    particles.positions = []
    particles.maxCount = 0

    const geometries = [
        new TorusGeometry(0.1, 0.03, 16, 32).rotateX(Math.PI/6).rotateY(2*Math.PI/3),
        new DodecahedronGeometry(0.15, 2),
        new BoxGeometry(0.15, 0.15, 0.15, 9, 9, 9).rotateX(5*Math.PI/6).rotateY(4*Math.PI/3),
        new TorusKnotGeometry(0.1, 0.02, 100, 5).rotateY(Math.PI/2)
    ]

    const positions = geometries.map((geo) => geo.attributes.position)
    
    particles.maxCount = Math.max(...positions.map(pos => pos.count))


    for(const position of positions)
    {
        const originalArray = position.array
        const newArray = new Float32Array(particles.maxCount * 3)

        for(let i = 0; i < particles.maxCount; i++)
        {
            const i3 = i * 3
    
            if(i3 < originalArray.length)
                newArray.set(originalArray.slice(i3, i3 + 3), i3);
            
            else
            {
                const randomIndex = Math.floor(position.count * Math.random()) * 3
                newArray.set(originalArray.slice(randomIndex, randomIndex + 3), i3);
            }
        }
        particles.positions.push(new Float32BufferAttribute(newArray, 3))

    }

   useGSAP(() => {
        // Update attributes
        pointsRef.current.geometry.attributes.position = particles.positions[particles.index]
        pointsRef.current.geometry.attributes.aPositionTarget = particles.positions[particles.nextIndex]

        // Animate uProgress
        gsap.fromTo(
            pointsRef.current.material.uniforms.uProgress,
            { value: 0 },
            { value: 1, duration: 3, ease: 'linear', repeat: -1, onRepeat: () => {

                particles.index = particles.nextIndex
                particles.nextIndex = (particles.index +1) %4

                pointsRef.current.geometry.attributes.position = particles.positions[particles.index]
                pointsRef.current.geometry.attributes.aPositionTarget = particles.positions[particles.nextIndex]
                
            } }
        )           
    })

    useEffect(() => {
        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);
            pointsRef.current.material.uniforms.uResolution.value.set(
                sizes.width * sizes.pixelRatio,
                sizes.height * sizes.pixelRatio
            );
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const ParticleShaderMaterial = useMemo(() => ({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
            uSize: new Uniform(0.01),
            uResolution: new Uniform(
                new Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)
            ),
            uProgress: new Uniform(0),
            uColorA: new Uniform(new Color('#f79929')),
            uColorB: new Uniform(new Color('#e1cd9e')),
        }
    }), [sizes]);
   

    return<>
        <group position={[3.6, 4.8, -1.35]}>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                    {...new BufferAttribute(new Float32Array(particles.positions[particles.index].array), 3)}
                    />
                    <bufferAttribute
                        attach="attributes-aPositionTarget"
                    {...new BufferAttribute(new Float32Array(particles.positions[particles.nextIndex].array), 3)}
                    />
                </bufferGeometry>
                <shaderMaterial
                    vertexShader={vertexShader}
                    depthWrite={false}
                    blending={AdditiveBlending}
                    vertexColors={true}
                    attach="material"
                    args={[ParticleShaderMaterial]}
                />
            </points>
        </group>
    </>
}