import React from 'react';
import { a, useSpring } from '@react-spring/three';

const Emoji = ({ expression = 'sad' }) => {
  const { mouthRotation, mouthPosition, mouthScale } = useSpring({
    mouthRotation: 
      expression === 'sad' ? [0, 0, Math.PI] : 
      expression === 'happy' ? [0, 0, 0] : 
      [0, 0, 0], // neutral
    mouthPosition: 
      expression === 'happy' ? [0, -0.4, 0.1] : // Adjusted position for happy expression
      expression === 'sad' ? [0, -0.7, 0.1] : 
      [0, -0.7, 0.1], // neutral
    mouthScale: 
      expression === 'neutral' ? [1, 0.2, 1] : [1, 1, 1],
    config: { tension: 170, friction: 14 },
  });

  return (
    <group>
      {/* Head */}
      <mesh>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color="#ffeb3b" />
      </mesh>
      
      {/* Left Eye */}
      <mesh position={[-0.7, 0.5, 0.1]}>
        <circleGeometry args={[0.25, 32]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Right Eye */}
      <mesh position={[0.7, 0.5, 0.1]}>
        <circleGeometry args={[0.25, 32]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      {/* Mouth */}
      {expression === 'neutral' ? (
        <a.mesh 
          position={mouthPosition}
          scale={mouthScale}
        >
          <boxGeometry args={[1.6, 0.5, 0.1]} /> {/* Adjust dimensions as needed */}
          <meshBasicMaterial color="black" />
        </a.mesh>
      ) : (
        <a.mesh 
          rotation={mouthRotation} 
          position={mouthPosition}
          scale={mouthScale}
        >
          <ringGeometry args={[0.8, 0.9, 32, 8, Math.PI, Math.PI]} />
          <meshBasicMaterial color="black" />
        </a.mesh>
      )}
    </group>
  );
};

export default Emoji;
