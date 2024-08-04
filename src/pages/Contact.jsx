import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="max-container py-24 text-center">
      <h1 className="head-text">
        Contact <span className="font-semibold drop-shadow">Me</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>If you have any questions or just want to get in touch, feel free to contact me using the form below.</p>
      </div>
      <div className="py-10 flex flex-col items-center">
        <h3 className="subhead-text">Get in Touch</h3>
        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
          className="mt-8 flex flex-col space-y-4 w-full max-w-lg"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-lg font-medium mb-2">Name</span>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <span className="text-lg font-medium mb-2">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-2 border border-gray-300 rounded-lg"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-lg font-medium mb-2">Message</span>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="p-2 border border-gray-300 rounded-lg"
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn-back rounded-xl bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
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
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-700 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com/MrTwinCharge27"
            target="_blank"
            rel="noopener noreferrer"
            className="block-container w-16 h-16 flex justify-center items-center rounded-full bg-white text-blue-400 shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
