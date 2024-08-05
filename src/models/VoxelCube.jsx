import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex shader code
const vertexShader = `
  uniform float uTime;
  varying vec3 vPosition;

  // Simplex noise function
  float noise(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 0.0))) * 43758.5453);
  }

  void main() {
    vPosition = position;
    vec3 pos = position;
    float noiseValue = noise(pos * 5.0 + uTime * 0.5);
    pos.y += sin(pos.x * 3.0 + uTime) * 0.5 + noiseValue * 0.5;
    pos.z += cos(pos.y * 3.0 + uTime) * 0.5 + noiseValue * 0.5;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment shader code
const fragmentShader = `
  varying vec3 vPosition;

  void main() {
    float intensity = (sin(vPosition.x * 3.0) + cos(vPosition.z * 3.0)) * 0.5 + 0.5;
    gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0) * intensity;
  }
`;

const VoxelCube = () => {
  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
  }), []);

  useFrame(({ clock }) => {
    shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
  });

  const gridSize = 10;
  const cubes = [];
  
  for (let x = -gridSize; x < gridSize; x++) {
    for (let y = -gridSize; y < gridSize; y++) {
      for (let z = -gridSize; z < gridSize; z++) {
        cubes.push(
          <mesh key={`${x}-${y}-${z}`} position={[x, y, z]} material={shaderMaterial}>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
        );
      }
    }
  }

  return <>{cubes}</>;
};

export default VoxelCube;
