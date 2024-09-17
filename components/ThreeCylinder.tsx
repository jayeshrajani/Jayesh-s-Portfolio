import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { div } from 'three/webgpu';

const ThreeCylinder = () => {
  return (
    <div>
        <Canvas>
      <OrbitControls />
      <ambientLight />
      <mesh>
        <cylinderGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
    </div>
    
  );
}

export default ThreeCylinder;
