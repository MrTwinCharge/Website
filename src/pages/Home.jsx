// src/pages/Home.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls } from '@react-three/drei';
import ParticleNebula from '../models/ParticlePhysics';
import Loader from '../components/Loader';

const Home = () => {
  return (
    <section className="max-container py-24 text-center">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">Welcome</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>
          I am a passionate Computer Engineering student at The University of Texas at Austin,
          specializing in Machine Learning and Data Science. Explore my projects and experiences.
        </p>
      </div>
      <div className="mt-16 flex justify-center items-center" style={{ height: '80vh' }}>
        <Canvas shadows style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <ParticleNebula />
          </Suspense>
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
