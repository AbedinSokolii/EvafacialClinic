import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Services from './components/Services';
import logo from '../src/assets/eva.png';
import hyrjaImg from '../src/assets/hyrja.jpg';

// Array of background images for About section
const aboutBackgrounds = [
  '/product1.jpg',
  '/product2.jpg'
];

function App() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % aboutBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar dark:bg-black dark:text-white">
      <Navbar />

      {/* HOME */}
      <section
        id="home"
        className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 relative"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hyrjaImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Eva Facial Clinic
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
            Your destination for beauty and wellness
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden"
      >
        {/* Background Gallery */}
        {aboutBackgrounds.map((bg, index) => (
          <div
            key={bg}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === currentBgIndex ? 1 : 0,
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          </div>
        ))}

        {/* About Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
          >
            About Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/90"
          >
            <p className="text-lg sm:text-xl">
              Eva Facial Clinic is your premier destination for advanced skincare and facial treatments.
              Our expert team is dedicated to enhancing your natural beauty using the latest techniques
              and premium products.
            </p>
            <p className="text-lg sm:text-xl">
              We believe in personalized care, ensuring each treatment is tailored to your unique needs
              and goals. Experience the perfect blend of luxury, expertise, and results-driven treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="snap-start min-h-screen w-full bg-blue-50 dark:bg-gray-900"
      >
        <Services />
      </section>

      {/* SOCIALS */}
      <section id="socials" className="snap-start w-full bg-white dark:bg-black">
        <Socials />
      </section>

      {/* CONTACT */}
      <section id="contact" className="snap-start w-full bg-white dark:bg-black">
        <Contact />
      </section>
    </main>
  );
}

export default App;
