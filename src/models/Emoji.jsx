import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';

const Emoji = ({ expression }) => {
  const mouthRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  const { mouthRotation, eyeScale, mouthScale } = useSpring({
    mouthRotation: expression === 'smile' ? [0, 0, 0] 
                  : expression === 'sad' ? [0, 0, Math.PI] 
                  : expression === 'wink' ? [0, 0, Math.PI / 4] 
                  : expression === 'ecstatic' ? [0, 0, Math.PI / 2]
                  : [0, 0, 0],
    eyeScale: expression === 'smile' ? [1, 1, 1] 
             : expression === 'sad' ? [1, 0.5, 1] 
             : expression === 'wink' ? [1, 1.5, 1] 
             : expression === 'ecstatic' ? [1.2, 1.2, 1.2]
             : [1, 1, 1],
    mouthScale: expression === 'smile' ? [1, 1, 1] 
               : expression === 'sad' ? [1, 0.5, 1] 
               : expression === 'ecstatic' ? [1.5, 1.2, 1] 
               : [1, 1, 1],
    config: { tension: 170, friction: 14 },
  });

  useFrame(() => {
    if (mouthRef.current) {
      mouthRef.current.rotation.set(...mouthRotation.get());
      mouthRef.current.scale.set(...mouthScale.get());
    }
    if (leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.set(...eyeScale.get());
      rightEyeRef.current.scale.set(...eyeScale.get());
    }
  });

  return (
    <group>
      {/* Head */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#ffeb3b" />
      </mesh>

      {/* Left Eye */}
      <a.mesh ref={leftEyeRef} position={[-0.75, 1, 1.75]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="black" />
      </a.mesh>

      {/* Right Eye */}
      <a.mesh ref={rightEyeRef} position={[0.75, 1, 1.75]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="black" />
      </a.mesh>

      {/* Mouth */}
      <a.mesh ref={mouthRef} position={[0, 0.4, 1.75]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 64]} />
        <meshStandardMaterial color="black" />
      </a.mesh>
    </group>
  );
};

export default Emoji;
