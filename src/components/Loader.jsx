// src/components/Loader.js
import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center w-full h-full">
        <div className="loader">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
