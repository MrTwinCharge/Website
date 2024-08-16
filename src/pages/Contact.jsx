import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Emoji from '../models/Emoji';
import Loader from '../components/Loader';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [emojiMood, setEmojiMood] = useState('sad'); // Initial mood is sad

  // Handle form input change
  const handleInputChange = () => {
    if (emojiMood === 'sad') setEmojiMood('happy'); // Change to happy when user starts typing
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmojiMood('ecstatic'); // Change to ecstatic when message is sent
  };

  return (
    <section className="max-container py-24 text-center">
      <h1 className="head-text">
        Contact <span className="font-semibold drop-shadow">Me</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>If you have any questions or just want to get in touch, feel free to follow me on your preferred social media below or send me a message.</p>
      </div>

      {/* Section for Send Message Text, Contact Form, and Emoji */}
      <div className="mt-12 text-center">
        <h3 className="subhead-text">Send Me a Message</h3>
      </div>

      <div className="mt-4 flex justify-center items-start space-x-8">
        {/* Contact Form */}
        <div className="w-full max-w-md">
          <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange} // Trigger emoji change on typing
                className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange} // Trigger emoji change on typing
                className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                onChange={handleInputChange} // Trigger emoji change on typing
                className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-back rounded-xl bg-blue-500 text-white py-2 px-6 hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Emoji Canvas */}
        <div className="w-full max-w-md h-[500px] mt-[-48px]"> {/* Adjusted height and margin to align with email field */}
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
              <Emoji expression={emojiMood}/> {/* Pass emoji mood as prop */}
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} /> {/* Disable camera rotation */}
          </Canvas>
        </div>
      </div>

      {/* Follow Me Section */}
      <div className="mt-8 py-6 text-center"> {/* Reduced margin and padding */}
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
    </section>
  );
};

export default Contact;
