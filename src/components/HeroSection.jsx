import React, { Component } from 'react'
import DevRoom from '../subcomponent/DevRoom.jsx'
import Loader from '../subcomponent/Loder.jsx'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera  } from '@react-three/drei'
import { useControls } from 'leva'

const HeroSection = () => {
  const { positionY } = useControls({
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
      step: 0.1,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
      step: 0.1,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });
    return ( 
      <section className='min-h-screen w-full flex flex-col relative'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-2">
            
            <p className="text-2xl sm:text-3xl font-bold font-generalsans text-white text-center">Hello, I'm Chetan <span className='waving-hand'>👋</span></p>
            <h1 className="text-2xl sm:text-3xl font-bold font-generalsans text-white text-center">A Passionate Full-Stack Developer</h1>

            </div>
            <div className="w-full h-full absolute mt20 inset-0">
              <leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<Loader />}></Suspense>
                    <PerspectiveCamera makeDefault position={[0, 5, 20]} />
                    
                    <DevRoom 
                    scale={0.05}
                     position={[0,0,0]}
                      rotation={[0, 180, 0]}
                      // scale={[x.positionX, x.positionY, x.positionZ]}
                       />
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <directionalLight position={[-10, -10, -5]} intensity={1} />

                </Canvas>
            </div>
             </section>
    )
  }

export default HeroSection