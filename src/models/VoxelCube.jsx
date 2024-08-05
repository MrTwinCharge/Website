import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Physics, useSphere, useBox } from '@react-three/cannon';
import * as THREE from 'three';

// Vertex shader code
const vertexShader = `
  uniform float uTime;
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment shader code
const fragmentShader = `
  uniform float uTime;
  varying vec3 vPosition;
  void main() {
    vec3 color = 0.5 + 0.5 * cos(uTime + vPosition.xyx + vec3(0, 2, 4));
    gl_FragColor = vec4(color, 1.0);
  }
`;

const Sphere = ({ position }) => {
  const [ref] = useSphere(() => ({ 
    mass: 1, 
    position,
    args: [0.3],
    velocity: [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5].map(v => v * 5),
    restitution: 0.9,
  }));

  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader,
    fragmentShader,
  }), []);

  useFrame(({ clock }) => {
    shaderMaterial.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} material={shaderMaterial}>
      <sphereGeometry args={[0.3, 32, 32]} />
    </mesh>
  );
};

const Boundary = () => {
  const size = [10, 10, 10];
  const thickness = 0.5;

  useBox(() => ({ args: [size[0], thickness, size[2]], position: [0, -size[1]/2 - thickness/2, 0], type: 'Static' })); // Bottom
  useBox(() => ({ args: [size[0], thickness, size[2]], position: [0, size[1]/2 + thickness/2, 0], type: 'Static' })); // Top
  useBox(() => ({ args: [thickness, size[1], size[2]], position: [-size[0]/2 - thickness/2, 0, 0], type: 'Static' })); // Left
  useBox(() => ({ args: [thickness, size[1], size[2]], position: [size[0]/2 + thickness/2, 0, 0], type: 'Static' })); // Right
  useBox(() => ({ args: [size[0], size[1], thickness], position: [0, 0, -size[2]/2 - thickness/2], type: 'Static' })); // Front
  useBox(() => ({ args: [size[0], size[1], thickness], position: [0, 0, size[2]/2 + thickness/2], type: 'Static' })); // Back

  return (
    <mesh>
      <boxGeometry args={size} />
      <meshBasicMaterial wireframe color="white" opacity={0.1} transparent />
    </mesh>
  );
};

const VoxelCube = () => {
  const sphereCount = 500;
  const spheres = [];

  for (let i = 0; i < sphereCount; i++) {
    const position = [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ];
    spheres.push(<Sphere key={i} position={position} />);
  }

  return (
    <Physics gravity={[0, 0, 0]} defaultContactMaterial={{ restitution: 0.9 }}>
      <Boundary />
      {spheres}
    </Physics>
  );
};

export default VoxelCube;