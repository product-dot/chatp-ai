'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const creators = [
    { name: 'Chloe', image: '/assets/women/chloe.webp' },
    { name: 'Sophia', image: '/assets/women/sophia.webp' },
    { name: 'Lily', image: '/assets/women/lily.webp' },
    { name: 'Hannah', image: '/assets/women/hannah.webp' },
    { name: 'Isabella', image: '/assets/women/isabella.webp' },
    { name: 'Emily', image: '/assets/women/emily.webp' },
    { name: 'Mia', image: '/assets/women/mia.webp' },
    { name: 'Ava', image: '/assets/women/ava.webp' }
  ];

  // Update progress indicator
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % creators.length);
      }, 2500); // 20s total / 8 creators = 2.5s per creator
      return () => clearInterval(interval);
    }
  }, [isHovered, creators.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-primary animated-gradient-text text-glow"
          >
            LET TOP CREATORS<br />
            CHAT FOR YOU
            <span className="text-4xl ml-2 emoji-normal">🌶️</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-rifton font-bold text-cp-green text-glow"
          >
            10x more Human than ChatGPT!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary text-lg px-8 py-4 bg-white text-cp-purple hover:bg-gray-100">
              🎉 GET EXTENSION
            </button>
            <button className="bg-white text-cp-purple font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
              SIGN UP
            </button>
          </motion.div>

          {/* Creator Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col items-center"
          >
            <div 
              className="carousel-container w-[calc(3*9rem+2*1rem)] sm:w-[calc(4*9rem+3*1rem)] md:w-[calc(5*9rem+4*1rem)] lg:w-[calc(6*9rem+5*1rem)] overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="creator-carousel flex gap-4 w-max">
                {/* All women creators */}
                {creators.map((creator, index) => (
                  <div
                    key={`first-${creator.name}`}
                    className="creator-card flex-shrink-0 w-36 h-36 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 overflow-hidden group cursor-pointer"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-1 left-1 right-1 text-center">
                        <span className="text-white text-xs font-bold drop-shadow-lg">
                          {creator.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {creators.map((creator, index) => (
                  <div
                    key={`second-${creator.name}`}
                    className="creator-card flex-shrink-0 w-36 h-36 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 overflow-hidden group cursor-pointer"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-1 left-1 right-1 text-center">
                        <span className="text-white text-xs font-bold drop-shadow-lg">
                          {creator.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="progress-dots">
              {creators.map((_, index) => (
                <div
                  key={index}
                  className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

