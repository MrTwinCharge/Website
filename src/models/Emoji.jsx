import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

const Emoji = () => {
  const mouthRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const [expression, setExpression] = useState('smile');

  const { mouthRotation, eyeScale } = useSpring({
    mouthRotation: expression === 'smile' ? [0, 0, 0] : expression === 'sad' ? [0, 0, Math.PI] : [0, 0, Math.PI / 4],
    eyeScale: expression === 'smile' ? [1, 1, 1] : expression === 'sad' ? [1, 0.5, 1] : [1, 1.5, 1],
    config: { tension: 170, friction: 14 },
  });

  useFrame(() => {
    if (mouthRef.current) {
      mouthRef.current.rotation.set(...mouthRotation.get());
    }
    if (leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.set(...eyeScale.get());
      rightEyeRef.current.scale.set(...eyeScale.get());
    }
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (time % 6 < 2) setExpression('smile');
    else if (time % 6 < 4) setExpression('sad');
    else setExpression('wink');
  });

  return (
    <group>
      {/* Head */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#ffeb3b" />
      </mesh>

      {/* Left Eye */}
      <a.mesh ref={leftEyeRef} position={[-0.75, 1, 1.8]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="black" />
      </a.mesh>

      {/* Right Eye */}
      <a.mesh ref={rightEyeRef} position={[0.75, 1, 1.8]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="black" />
      </a.mesh>

      {/* Mouth */}
      <a.mesh ref={mouthRef} position={[0, 0.4, 1.9]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="black" />
      </a.mesh>
    </group>
  );
};

export default Emoji;
