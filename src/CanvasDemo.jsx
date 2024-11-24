import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import {EffectComposer, ToneMapping} from "@react-three/postprocessing"
import { ToneMappingMode } from 'postprocessing'
import { Environment, OrbitControls, Sky } from "@react-three/drei"
import Experience from './Experience'
import { useControls } from 'leva'

export default function CanvasDemo({name,equations,description,use}) {
  return (
    <div className='w-full flex flex-col items-center gap-8'>
        <div className='w-ful flex flex-col justify-center items-center'>
          <h1 className='font-bold'>{name}</h1>
          <h1 className='font-mono'>{description}</h1>
          <div className='flex flex-col justify-center items-center'>
            <label>x : {equations.x.toString()}</label>
            <label>y : {equations.y.toString()}</label>
            <label>z : {equations.z.toString()}</label>
          </div>
          <h1 className='font-semibold'>{use}</h1>
        </div>

        <div className='w-3/5 h-96'>
          <Canvas gl={{antialias:false}} camera={{position:[0,0,15],fov: 75}}> 
            <Suspense fallback={null}>
            <EffectComposer>
              <ToneMapping mode={ToneMappingMode.LINEAR}/>
            </EffectComposer>
            <Environment preset='city'/>
            <fog attach='fog' args={['white', 30, 45]} />
            <OrbitControls/>
            <Experience 
              name={name}
              equations={equations}
              description={description}
              use={use}
            />
            <Sky/>
            </Suspense>
          </Canvas>
        </div>
    </div>
  )
}
