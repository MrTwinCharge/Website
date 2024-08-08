import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNebula = () => {
  const meshRef = useRef();
  const numCubes = 5000;
  const dummy = new THREE.Object3D();
  const clock = new THREE.Clock();

  // Define pastel blue color
  const pastelBlue = new THREE.Color(0xadd8e6); // Pastel Blue

  // Initialize color array
  const colorArray = useMemo(() => new Float32Array(numCubes * 3), [numCubes]);
  const instanceColor = useMemo(() => new THREE.InstancedBufferAttribute(colorArray, 3), [colorArray]);

  useFrame(() => {
    const time = clock.getElapsedTime() * 0.5;
    const baseRadius = 5;

    for (let i = 0; i < numCubes; i++) {
      // Spherical distribution
      const t = i / numCubes;
      const phi = Math.acos(-1 + 2 * t);
      const theta = Math.sqrt(numCubes * Math.PI) * phi;

      // Wind current effect
      const windEffect = Math.sin(phi * 4 + time * 2) * 0.5;
      const radiusVariation = Math.sin(theta * 6 + time * 3) * 0.2;

      const radius = baseRadius + radiusVariation + Math.sin(time * 0.5) * 0.5;
      let x = radius * Math.sin(phi) * Math.cos(theta + windEffect);
      let y = radius * Math.sin(phi) * Math.sin(theta + windEffect);
      let z = radius * Math.cos(phi);

      dummy.position.set(x, y, z);
      
      // Scale animation
      const scale = 0.04 + Math.sin(time * 4 + i) * 0.02;
      dummy.scale.set(scale, scale, scale);
      
      // Rotation for additional movement
      dummy.rotation.set(time * 2, time * 3, time * 1.5);
      
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Set all cubes to pastel blue
      pastelBlue.toArray(colorArray, i * 3);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh 
      ref={meshRef} 
      args={[null, null, numCubes]} 
      castShadow
      receiveShadow
    >
      <boxGeometry />
      <meshStandardMaterial 
        vertexColors
        roughness={0.7} // Adjust roughness to interact with lighting better
        metalness={0.1} // Adjust metalness to interact with lighting better
      />
      <instancedBufferAttribute 
        attachObject={['attributes', 'instanceColor']} 
        args={[colorArray, 3]} 
        usage={THREE.DynamicDrawUsage}
      />
    </instancedMesh>
  );
};

export default ParticleNebula;
