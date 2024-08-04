import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const VoxelCube = () => {
  const meshRef = useRef();

  // Rotato
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8ac6d1" roughness={0.5} metalness={0.3} />
    </mesh>
  );
};

export default VoxelCube;
