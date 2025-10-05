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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-12 sm:pt-20">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Parallax Layers */}
        <div className="absolute inset-0 parallax-bg">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="absolute inset-0 parallax-mid">
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        {/* Tech Aesthetic Elements */}
        <div className="absolute inset-0 circuit-pattern"></div>
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 holographic-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center py-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-8"
        >

          {/* Main Headline - Enhanced mobile boldness */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black sm:font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-black sm:font-bold">
              AI-Powered OnlyFans
            </span>
            <br />
            <span className="text-gray-800 font-black sm:font-bold">Chatting</span>
          </motion.h1>

          {/* Subheadline - Enhanced mobile boldness */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 font-bold sm:font-normal"
          >
            Transform your content strategy with intelligent AI that works 24/7. 
            <span className="font-black sm:font-semibold text-purple-600">10x more human</span> than traditional chatbots.
          </motion.p>

          {/* CTA Buttons - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <button className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg touch-manipulation">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="bg-white/80 backdrop-blur-sm text-purple-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white w-full sm:w-auto text-base sm:text-lg touch-manipulation">
              View Demo
            </button>
          </motion.div>

          {/* Creator Carousel - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 flex flex-col items-center px-4 sm:px-0"
          >
            <div className="mb-4 sm:mb-6 text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent gradient-text">
                Choose Your AI Persona
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">Advanced AI personalities trained on successful creator strategies</p>
            </div>
            
            <div 
              className="carousel-container w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="creator-carousel flex gap-3 sm:gap-4 w-max">
                {/* All women creators */}
                {creators.map((creator, index) => (
                  <div
                    key={`first-${creator.name}`}
                    className="creator-card futuristic-card depth-card flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden group cursor-pointer relative touch-manipulation"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 144px"
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
                    className="creator-card futuristic-card depth-card flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden group cursor-pointer touch-manipulation"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={creator.image}
                        alt={creator.name}
                        fill
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 144px"
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
            
            {/* Progress Indicator - Mobile optimized */}
            <div className="flex space-x-2 mt-4 sm:mt-6 overflow-x-auto scrollbar-hide">
              {creators.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentIndex 
                      ? 'bg-purple-600 w-6 sm:w-8' 
                      : 'bg-gray-300'
                  }`}
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
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-purple-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

