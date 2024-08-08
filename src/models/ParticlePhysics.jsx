import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNebula = () => {
  const meshRef = useRef();
  const numCubes = 5000;
  const dummy = new THREE.Object3D();
  const clock = new THREE.Clock();

  const { colorArray } = useMemo(() => {
    const colorArray = new Float32Array(numCubes * 3);
    const color = new THREE.Color();

    for (let i = 0; i < numCubes; i++) {
      // Create a gradient effect
      const t = i / numCubes;
      color.setHSL(t * 0.6 + 0.5, 1, 0.5);
      color.toArray(colorArray, i * 3);
    }

    return { colorArray };
  }, []);

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
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, numCubes]}>
      <boxGeometry />
      <meshPhongMaterial vertexColors />
      <instancedBufferAttribute 
        attach="instanceColor" 
        args={[colorArray, 3]} 
      />
    </instancedMesh>
  );
};

export default ParticleNebula;