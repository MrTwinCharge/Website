// Home.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls, Plane, useHelper } from '@react-three/drei';
import VoxelCube from '../models/VoxelCube';

const Home = () => {
  return (
    <section className="max-container py-24 text-center">
      <h1 className="head-text">
        Welcome to <span className="blue-gradient_text font-semibold drop-shadow">My Portfolio</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>
          I am a passionate Computer Engineering student at The University of Texas at Austin,
          specializing in Machine Learning and Data Science. Explore my projects and experiences.
        </p>
      </div>
      <div className="mt-16 flex justify-center items-center h-[500px]">
        <Canvas shadows>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <VoxelCube />
          <Plane
            args={[10, 10]}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <meshStandardMaterial attach="material" color="#e0e0e0" />
          </Plane>
          <OrbitControls />
        </Canvas>
      </div>
      <div className="mt-16">
        <Link to="/about" className="btn-back rounded-xl bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition duration-300">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Home;
