import { Html, Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Experience({equations:eq}) {
  const {scale,radius,color,width,length} = useControls('Move the canvas with mouse', {
    scale:{value:2,min:-10,max:10,step:0.1},
    radius:{value:2,min:-10,max:10,step:0.1},
    color:'#eb4034',
    width:{value:12,min:0,max:20,step:0.1},
    length:{value:15,min:0,max:20,step:0.001},
  })
  const cubeRef = useRef()
  useFrame((state,delta) => {
    if(cubeRef.current){
        const scaleFactor = scale
        const r = radius
        const t = state.clock.getElapsedTime() * scaleFactor
        const x = eq.x(t,r)
        const y = eq.y(t,r)
        const z = eq.z(t,r)
        cubeRef.current.position.set(x,y,z)
    }
  })

  return (
    <>  
        <Trail
            width={width}
            color={color}
            length={length}
            decay={0.1}
            attenuation={t => Math.sin(t * Math.PI)}
        >
            <mesh ref={cubeRef} >
                <boxGeometry args={[0,0,0]} />
                <meshStandardMaterial color='red' side={THREE.DoubleSide}/>
            </mesh>
        </Trail>
    </>
  )
}
