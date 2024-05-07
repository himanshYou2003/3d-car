import { Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Car from '../public/Car'

function App() {


  return (
    <>
      <Canvas>
        {/* <ambientLight intensity={0}/> */}
        <ambientLight/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Car/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>

      <div className='container'>
        <h1>Sports Car</h1>
        <p>A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, the thrill of driving, and racing capability. Sports cars originated in Europe in early 1910s and are currently produced by many manufacturers around the world.</p>
      </div>
      <div className='page2'></div>
    </>
  )
}

export default App
