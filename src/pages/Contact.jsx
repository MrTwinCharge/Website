import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Emoji from '../models/Emoji'
import Loader from '../components/Loader';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="max-container py-24 text-center">
      <h1 className="head-text">
        Contact <span className="font-semibold drop-shadow">Me</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>If you have any questions or just want to get in touch, feel free to follow me on your preferred social media below.</p>
      </div>
      <div className="py-8 text-center">
        <h3 className="subhead-text">Follow Me</h3>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/aayushvij26"
            target="_blank"
            rel="noopener noreferrer"
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-500 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/aayushvij"
            target="_blank"
            rel="noopener noreferrer"
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-500 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://twitter.com/MrTwinCharge27"
            target="_blank"
            rel="noopener noreferrer"
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-500 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://github.com/MrTwinCharge"
            target="_blank"
            rel="noopener noreferrer"
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-500 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-[800px] h-[600px]">
          <Canvas 
            shadows 
            style={{ width: '100%', height: '100%' }} 
            camera={{ position: [0, 0, 11.5], fov: 60 }} 
          >
            <ambientLight intensity={2} /> 
            <directionalLight
              position={[10, 10, 10]}  
              intensity={1.5}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.7} /> 
            <Suspense fallback={<Loader />}>
              <Emoji/>
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
