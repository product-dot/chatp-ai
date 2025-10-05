'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Personas() {
  const [selectedPersona, setSelectedPersona] = useState<{name: string, description: string, image: string} | null>(null);
  const [clickedWomenPersona, setClickedWomenPersona] = useState<{name: string, description: string, image: string} | null>(null);
  const [clickedMenPersona, setClickedMenPersona] = useState<{name: string, description: string, image: string} | null>(null);
  const [clickedLgbtqPersona, setClickedLgbtqPersona] = useState<{name: string, description: string, image: string} | null>(null);
  
  // Refs for carousel containers
  const womenCarouselRef = useRef<HTMLDivElement>(null);
  const menCarouselRef = useRef<HTMLDivElement>(null);
  const lgbtqCarouselRef = useRef<HTMLDivElement>(null);

  // Auto-play state
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel control functions
  const scrollCarousel = (carouselRef: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoScroll = (carouselRef: React.RefObject<HTMLDivElement>) => {
      if (carouselRef.current) {
        const currentScroll = carouselRef.current.scrollLeft;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        
        if (currentScroll >= maxScroll) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollTo({ 
            left: currentScroll + 300, 
            behavior: 'smooth' 
          });
        }
      }
    };

    const autoScrollMen = (carouselRef: React.RefObject<HTMLDivElement>) => {
      if (carouselRef.current) {
        const currentScroll = carouselRef.current.scrollLeft;
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        
        if (currentScroll <= 0) {
          carouselRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollTo({ 
            left: currentScroll - 300, 
            behavior: 'smooth' 
          });
        }
      }
    };

    const scrollAllCarousels = () => {
      autoScroll(womenCarouselRef);
      autoScrollMen(menCarouselRef);
      autoScroll(lgbtqCarouselRef);
    };

    const interval = setInterval(scrollAllCarousels, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);


  const personaCategories = {
    all: {
      title: "All Personas",
      personas: [
        { name: "Chloe", image: "/assets/women/chloe.webp", category: "women", description: "A vibrant and energetic persona with a passion for fitness and wellness. She's known for her motivational content and positive attitude, always encouraging others to live their best lives." },
        { name: "Sophia", image: "/assets/women/sophia.webp", category: "women", description: "An elegant and sophisticated persona who loves art, culture, and intellectual conversations. She's well-read, articulate, and enjoys discussing philosophy, literature, and current events." },
        { name: "Lily", image: "/assets/women/lily.webp", category: "women", description: "A creative and artistic soul who expresses herself through various forms of art. She's passionate about photography, painting, and music, and loves to inspire others to explore their creative side." },
        { name: "Hannah", image: "/assets/women/hannah.webp", category: "women", description: "A warm and nurturing persona with a love for cooking and home life. She's known for her delicious recipes, home organization tips, and creating a cozy, welcoming atmosphere." },
        { name: "Isabella", image: "/assets/women/isabella.webp", category: "women", description: "A confident and ambitious businesswoman who shares insights about entrepreneurship and career growth. She's passionate about empowering other women to achieve their professional goals." },
        { name: "Emily", image: "/assets/women/emily.webp", category: "women", description: "A tech-savvy and innovative persona who loves exploring new technologies and digital trends. She's always up-to-date with the latest gadgets and enjoys helping others navigate the digital world." },
        { name: "Mia", image: "/assets/women/mia.webp", category: "women", description: "A travel enthusiast and adventure seeker who documents her journeys around the world. She's passionate about different cultures, languages, and sharing travel tips with her audience." },
        { name: "Ava", image: "/assets/women/ava.webp", category: "women", description: "A wellness and mindfulness advocate who focuses on mental health, meditation, and spiritual growth. She's known for her calming presence and practical advice for stress management." },
        { name: "Benjamin", image: "/assets/men/Benjamin.webp", category: "men", description: "A charismatic and confident persona with a passion for leadership and personal development. He's known for his motivational content and practical advice for achieving success." },
        { name: "Alexander", image: "/assets/men/Alexander.webp", category: "men", description: "A sophisticated and cultured gentleman who enjoys fine dining, wine, and intellectual discussions. He's well-traveled and loves sharing his experiences and knowledge." },
        { name: "Ethan", image: "/assets/men/ethan.webp", category: "men", description: "A tech entrepreneur and innovation enthusiast who loves discussing the latest in technology and business. He's passionate about startups and helping others build successful ventures." },
        { name: "Liam", image: "/assets/men/liam.webp", category: "men", description: "A fitness enthusiast and health advocate who shares workout routines and nutrition tips. He's known for his dedication to physical wellness and motivating others to stay active." },
        { name: "Noah", image: "/assets/men/Noah.webp", category: "men", description: "A creative artist and musician who expresses himself through various artistic mediums. He's passionate about music, visual arts, and inspiring others to explore their creativity." },
        { name: "Oliver", image: "/assets/men/Oliver.webp", category: "men", description: "A family-oriented persona who values relationships and personal connections. He's known for his wisdom about relationships, parenting, and building meaningful connections." },
        { name: "William", image: "/assets/men/william.webp", category: "men", description: "A successful businessman and investor who shares insights about finance and wealth building. He's passionate about helping others achieve financial independence and success." },
        { name: "James", image: "/assets/men/James.webp", category: "men", description: "A sports enthusiast and competitive athlete who loves discussing sports, fitness, and healthy competition. He's known for his determination and inspiring others to push their limits." },
        { name: "Ariel", image: "/assets/LGBTQ+/Ariel.webp", category: "lgbtq", description: "A vibrant and expressive persona who celebrates diversity and self-expression. They're passionate about LGBTQ+ rights, creativity, and helping others embrace their authentic selves." },
        { name: "Felix", image: "/assets/LGBTQ+/Felix.webp", category: "lgbtq", description: "A creative and artistic soul who expresses themselves through fashion, art, and performance. They're known for their unique style and inspiring others to be bold and authentic." },
        { name: "Jamie", image: "/assets/LGBTQ+/Jamie.webp", category: "lgbtq", description: "A thoughtful and introspective persona who values deep conversations and personal growth. They're passionate about mental health, relationships, and helping others navigate life's challenges." },
        { name: "Jordan", image: "/assets/LGBTQ+/Jordan.webp", category: "lgbtq", description: "A confident and empowering persona who advocates for equality and social justice. They're known for their activism and inspiring others to stand up for what they believe in." },
        { name: "Scott", image: "/assets/LGBTQ+/Scott.webp", category: "lgbtq", description: "A tech-savvy and innovative persona who loves exploring new technologies and digital creativity. They're passionate about using technology to connect people and create positive change." },
        { name: "Serena", image: "/assets/LGBTQ+/Serena.webp", category: "lgbtq", description: "A wellness and self-care advocate who focuses on holistic health and personal well-being. They're known for their calming presence and practical advice for self-improvement." },
        { name: "Tiffany", image: "/assets/Tiffany.webp", category: "lgbtq", description: "A fashion-forward and trendsetting persona who loves exploring style and self-expression. They're passionate about fashion, beauty, and helping others discover their unique aesthetic." },
        { name: "Adrian", image: "/assets/LGBTQ+/Adrian.webp", category: "lgbtq", description: "A creative entrepreneur and business innovator who combines artistic vision with business acumen. They're passionate about helping others turn their creative ideas into successful ventures." }
      ]
    },
    women: {
      title: "Women Personas",
      personas: [
        { name: "Chloe", image: "/assets/women/chloe.webp", category: "women", description: "A vibrant and energetic persona with a passion for fitness and wellness. She's known for her motivational content and positive attitude, always encouraging others to live their best lives." },
        { name: "Sophia", image: "/assets/women/sophia.webp", category: "women", description: "An elegant and sophisticated persona who loves art, culture, and intellectual conversations. She's well-read, articulate, and enjoys discussing philosophy, literature, and current events." },
        { name: "Lily", image: "/assets/women/lily.webp", category: "women", description: "A creative and artistic soul who expresses herself through various forms of art. She's passionate about photography, painting, and music, and loves to inspire others to explore their creative side." },
        { name: "Hannah", image: "/assets/women/hannah.webp", category: "women", description: "A warm and nurturing persona with a love for cooking and home life. She's known for her delicious recipes, home organization tips, and creating a cozy, welcoming atmosphere." },
        { name: "Isabella", image: "/assets/women/isabella.webp", category: "women", description: "A confident and ambitious businesswoman who shares insights about entrepreneurship and career growth. She's passionate about empowering other women to achieve their professional goals." },
        { name: "Emily", image: "/assets/women/emily.webp", category: "women", description: "A tech-savvy and innovative persona who loves exploring new technologies and digital trends. She's always up-to-date with the latest gadgets and enjoys helping others navigate the digital world." },
        { name: "Mia", image: "/assets/women/mia.webp", category: "women", description: "A travel enthusiast and adventure seeker who documents her journeys around the world. She's passionate about different cultures, languages, and sharing travel tips with her audience." },
        { name: "Ava", image: "/assets/women/ava.webp", category: "women", description: "A wellness and mindfulness advocate who focuses on mental health, meditation, and spiritual growth. She's known for her calming presence and practical advice for stress management." }
      ]
    },
    men: {
      title: "Men Personas",
      personas: [
        { name: "Benjamin", image: "/assets/men/Benjamin.webp", category: "men", description: "A charismatic and confident persona with a passion for leadership and personal development. He's known for his motivational content and practical advice for achieving success." },
        { name: "Alexander", image: "/assets/men/Alexander.webp", category: "men", description: "A sophisticated and cultured gentleman who enjoys fine dining, wine, and intellectual discussions. He's well-traveled and loves sharing his experiences and knowledge." },
        { name: "Ethan", image: "/assets/men/ethan.webp", category: "men", description: "A tech entrepreneur and innovation enthusiast who loves discussing the latest in technology and business. He's passionate about startups and helping others build successful ventures." },
        { name: "Liam", image: "/assets/men/liam.webp", category: "men", description: "A fitness enthusiast and health advocate who shares workout routines and nutrition tips. He's known for his dedication to physical wellness and motivating others to stay active." },
        { name: "Noah", image: "/assets/men/Noah.webp", category: "men", description: "A creative artist and musician who expresses himself through various artistic mediums. He's passionate about music, visual arts, and inspiring others to explore their creativity." },
        { name: "Oliver", image: "/assets/men/Oliver.webp", category: "men", description: "A family-oriented persona who values relationships and personal connections. He's known for his wisdom about relationships, parenting, and building meaningful connections." },
        { name: "William", image: "/assets/men/william.webp", category: "men", description: "A successful businessman and investor who shares insights about finance and wealth building. He's passionate about helping others achieve financial independence and success." },
        { name: "James", image: "/assets/men/James.webp", category: "men", description: "A sports enthusiast and competitive athlete who loves discussing sports, fitness, and healthy competition. He's known for his determination and inspiring others to push their limits." }
      ]
    },
    lgbtq: {
      title: "LGBTQ+ Personas",
      personas: [
        { name: "Ariel", image: "/assets/LGBTQ+/Ariel.webp", category: "lgbtq", description: "A vibrant and expressive persona who celebrates diversity and self-expression. They're passionate about LGBTQ+ rights, creativity, and helping others embrace their authentic selves." },
        { name: "Felix", image: "/assets/LGBTQ+/Felix.webp", category: "lgbtq", description: "A creative and artistic soul who expresses themselves through fashion, art, and performance. They're known for their unique style and inspiring others to be bold and authentic." },
        { name: "Jamie", image: "/assets/LGBTQ+/Jamie.webp", category: "lgbtq", description: "A thoughtful and introspective persona who values deep conversations and personal growth. They're passionate about mental health, relationships, and helping others navigate life's challenges." },
        { name: "Jordan", image: "/assets/LGBTQ+/Jordan.webp", category: "lgbtq", description: "A confident and empowering persona who advocates for equality and social justice. They're known for their activism and inspiring others to stand up for what they believe in." },
        { name: "Scott", image: "/assets/LGBTQ+/Scott.webp", category: "lgbtq", description: "A tech-savvy and innovative persona who loves exploring new technologies and digital creativity. They're passionate about using technology to connect people and create positive change." },
        { name: "Serena", image: "/assets/LGBTQ+/Serena.webp", category: "lgbtq", description: "A wellness and self-care advocate who focuses on holistic health and personal well-being. They're known for their calming presence and practical advice for self-improvement." },
        { name: "Tiffany", image: "/assets/Tiffany.webp", category: "lgbtq", description: "A fashion-forward and trendsetting persona who loves exploring style and self-expression. They're passionate about fashion, beauty, and helping others discover their unique aesthetic." },
        { name: "Adrian", image: "/assets/LGBTQ+/Adrian.webp", category: "lgbtq", description: "A creative entrepreneur and business innovator who combines artistic vision with business acumen. They're passionate about helping others turn their creative ideas into successful ventures." }
      ]
    }
  };



  return (
    <section id="personas" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent staggered-text">
              Choose Your AI
            </span>
            <br />
            <span className="text-gray-800 staggered-text">Persona</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4 staggered-text">
            Advanced AI personalities trained on successful creator strategies. Each persona is designed to engage your audience authentically and boost your revenue.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto staggered-text">
            <strong>Tip:</strong> Use the arrow buttons to navigate through the personas
          </p>
        </motion.div>


        {/* Three Separate Carousels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Women Personas Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Women Personas</h3>
            <div className="personas-carousel-container overflow-hidden relative">
              {/* Arrow Buttons */}
              <button
                onClick={() => scrollCarousel(womenCarouselRef, 'left')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel(womenCarouselRef, 'right')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div 
                ref={womenCarouselRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  width: '100%',
                  maxWidth: '100%'
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {[...personaCategories.women.personas, ...personaCategories.women.personas].map((persona, index) => (
                  <motion.div
                    key={`women-${persona.name}-${index}`}
                    className="group cursor-pointer flex-shrink-0 w-64 staggered-card persona-card-clickable persona-click-hint"
                    onClick={() => {
                      setSelectedPersona({name: persona.name, description: persona.description, image: persona.image});
                      setClickedWomenPersona({name: persona.name, description: persona.description, image: persona.image});
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl futuristic-card depth-card h-full flex flex-col">
                      <div className="aspect-square relative flex-shrink-0">
                        <Image
                          src={persona.image}
                          alt={persona.name}
                          fill
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 200px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 text-center flex-grow flex items-center justify-center">
                        <h3 className="font-bold text-lg text-gray-900">{persona.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Women Persona Description */}
            {clickedWomenPersona && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={clickedWomenPersona.image}
                        alt={clickedWomenPersona.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {clickedWomenPersona.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {clickedWomenPersona.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Men Personas Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Men Personas</h3>
            <div className="personas-carousel-container overflow-hidden relative">
              {/* Arrow Buttons */}
              <button
                onClick={() => scrollCarousel(menCarouselRef, 'left')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel(menCarouselRef, 'right')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div 
                ref={menCarouselRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  width: '100%',
                  maxWidth: '100%'
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {[...personaCategories.men.personas, ...personaCategories.men.personas].map((persona, index) => (
                  <motion.div
                    key={`men-${persona.name}-${index}`}
                    className="group cursor-pointer flex-shrink-0 w-64 staggered-card persona-card-clickable persona-click-hint"
                    onClick={() => {
                      setSelectedPersona({name: persona.name, description: persona.description, image: persona.image});
                      setClickedMenPersona({name: persona.name, description: persona.description, image: persona.image});
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl futuristic-card depth-card h-full flex flex-col">
                      <div className="aspect-square relative flex-shrink-0">
                        <Image
                          src={persona.image}
                          alt={persona.name}
                          fill
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 200px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 text-center flex-grow flex items-center justify-center">
                        <h3 className="font-bold text-lg text-gray-900">{persona.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Men Persona Description */}
            {clickedMenPersona && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={clickedMenPersona.image}
                        alt={clickedMenPersona.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {clickedMenPersona.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {clickedMenPersona.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* LGBTQ+ Personas Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">LGBTQ+ Personas</h3>
            <div className="personas-carousel-container overflow-hidden relative">
              {/* Arrow Buttons */}
              <button
                onClick={() => scrollCarousel(lgbtqCarouselRef, 'left')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel(lgbtqCarouselRef, 'right')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 border border-gray-200"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div 
                ref={lgbtqCarouselRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  width: '100%',
                  maxWidth: '100%'
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {[...personaCategories.lgbtq.personas, ...personaCategories.lgbtq.personas].map((persona, index) => (
                  <motion.div
                    key={`lgbtq-${persona.name}-${index}`}
                    className="group cursor-pointer flex-shrink-0 w-64 staggered-card persona-card-clickable persona-click-hint"
                    onClick={() => {
                      setSelectedPersona({name: persona.name, description: persona.description, image: persona.image});
                      setClickedLgbtqPersona({name: persona.name, description: persona.description, image: persona.image});
                    }}
                  >
                    <div className="relative overflow-hidden rounded-2xl futuristic-card depth-card h-full flex flex-col">
                      <div className="aspect-square relative flex-shrink-0">
                        <Image
                          src={persona.image}
                          alt={persona.name}
                          fill
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 200px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 text-center flex-grow flex items-center justify-center">
                        <h3 className="font-bold text-lg text-gray-900">{persona.name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* LGBTQ+ Persona Description */}
            {clickedLgbtqPersona && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={clickedLgbtqPersona.image}
                        alt={clickedLgbtqPersona.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {clickedLgbtqPersona.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {clickedLgbtqPersona.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Boost Your Revenue?</h3>
          <p className="text-lg text-gray-600 mb-8">Choose your persona and start earning 10x more today!</p>
          <button className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

    </section>
  );
}

