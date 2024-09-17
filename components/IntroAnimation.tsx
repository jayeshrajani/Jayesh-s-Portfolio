import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Image from 'next/image';

const IntroAnimation = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Canvas className="absolute inset-0">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Sphere args={[1, 32, 32]} scale={[3, 3, 3]}>
          <meshStandardMaterial color="#ff0051" />
        </Sphere>
      </Canvas>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, This is <span className="text-cyan-300">Me</span>
          </h1>
          <p className="text-lg text-white mb-8">
            I&apos;m a passionate developer pushing the boundaries of tech and creativity.
          </p>
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src="/path-to-your-picture.jpg" // Replace with your actual image path
              alt="Your Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroAnimation;
