'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  MessageCircle, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  Cpu,
  Rocket,
  Users,
  Target,
  GraduationCap,
  Languages
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Features() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        // If clicking the same card, collapse it
        newSet.delete(index);
      } else {
        // If clicking a different card, collapse all others and expand this one
        newSet.clear();
        newSet.add(index);
      }
      return newSet;
    });
  };

  const features = [
    {
      icon: "TrendingUp",
      title: "10x Revenue Boost",
      description: "Advanced AI automation increases your earnings exponentially",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: "DollarSign",
      title: "5x More Tips",
      description: "Our users report significantly higher tips from engaged subscribers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "MessageCircle",
      title: "Intelligent Conversations",
      description: "AI that understands your audience and responds authentically",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: "Cpu",
      title: "Adaptive AI Technology",
      description: "Our AI understands subscriber psychology and keeps them engaged, increasing chances of tips",
      expandedContent: "Our advanced machine learning algorithms analyze conversation patterns, emotional cues, and engagement metrics to deliver responses that feel natural and compelling. The AI adapts to each subscriber's communication style, building stronger connections that lead to increased tips and longer conversations.",
      features: ["Real-time sentiment analysis", "Personalized response generation", "Engagement optimization", "Subscriber behavior tracking"]
    },
    {
      icon: "Rocket",
      title: "Lightning Fast Setup",
      description: "Just install and start using the extension with a quick sign-up process",
      expandedContent: "Get started in under 5 minutes with our streamlined onboarding process. No technical knowledge required - simply install the Chrome extension, connect your OnlyFans account, and start earning more immediately.",
      features: ["One-click installation", "Automatic account sync", "Instant activation", "No coding required"]
    },
    {
      icon: "Users",
      title: "Customizable Personas",
      description: "Choose from 24 distinct personas with adjustable traits, for the best tailored-to-you experience",
      expandedContent: "Select from our diverse collection of AI personas including flirty, professional, playful, and more. Each persona can be customized with specific traits, response styles, and conversation preferences to match your unique brand voice.",
      features: ["24 unique personas", "Customizable traits", "Response style options", "Brand voice matching"]
    },
    {
      icon: "Target",
      title: "Revenue Optimization",
      description: "Increase revenue with PPV content sales and higher tips from engaged users",
      expandedContent: "Our AI is specifically trained to identify opportunities for PPV sales and tip requests. It naturally guides conversations toward monetization while maintaining authenticity, resulting in higher conversion rates and increased earnings.",
      features: ["PPV sales optimization", "Tip request strategies", "Revenue tracking", "Conversion analytics"]
    },
    {
      icon: "GraduationCap",
      title: "Advanced AI Training",
      description: "Our AI possesses the intellect of over 2000 writers, swiftly deciphering dialogues and producing tailored replies",
      expandedContent: "Trained on millions of successful conversations and content from top creators, our AI understands the nuances of adult content communication. It can handle complex conversations, emotional support, and sales conversations with human-like intelligence.",
      features: ["2000+ writer training data", "Contextual understanding", "Emotional intelligence", "Sales conversation mastery"]
    },
    {
      icon: "Languages",
      title: "Multi-Language Support",
      description: "Chat with your audience in multiple languages - English, Spanish, French, German, and more",
      expandedContent: "Break language barriers and reach a global audience. Our AI can seamlessly switch between languages, understand cultural nuances, and maintain authentic conversations in over 20 languages.",
      features: ["20+ languages supported", "Cultural context awareness", "Automatic language detection", "Native-level fluency"]
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
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
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-20">
        {/* Section Header - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent staggered-text">
              Advanced AI
            </span>
            <br />
            <span className="text-gray-800 staggered-text">Features</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto staggered-text px-2">
            Powered by cutting-edge machine learning algorithms trained on successful creator strategies
          </p>
        </motion.div>

        {/* Dynamic Main Features with Advanced Animations - Mobile optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon === "TrendingUp" ? TrendingUp : 
                                 feature.icon === "DollarSign" ? DollarSign : 
                                 feature.icon === "MessageCircle" ? MessageCircle : TrendingUp;
            
            // Dynamic metrics for each feature
            const metrics = [
              { value: 10, suffix: "x", label: "Revenue Boost", color: "from-purple-500 to-blue-500" },
              { value: 5, suffix: "x", label: "More Tips", color: "from-green-500 to-emerald-500" },
              { value: 24, suffix: "/7", label: "AI Responses", color: "from-purple-500 to-pink-500" }
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.1))",
                      "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${10 + (i * 12)}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 text-center">
                  {/* Animated Icon Container - Mobile optimized */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 sm:mb-6 shadow-xl`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 25px rgba(0,0,0,0.1)",
                        "0 15px 35px rgba(0,0,0,0.15)",
                        "0 10px 25px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated Counter - Mobile optimized */}
                  <motion.div 
                    className="mb-3 sm:mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        {metrics[index].value}
                      </motion.span>
                      <span className="text-xl sm:text-2xl text-gray-500">{metrics[index].suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">{metrics[index].label}</div>
                  </motion.div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                  
                  
                  {/* Live Status Indicator */}
                  <motion.div 
                    className="flex items-center justify-center space-x-2 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <span className="text-gray-600 font-medium">Live & Active</span>
                  </motion.div>
                  
                  {/* Interactive Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300/50 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Image Section - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Enhanced Image Container with Better Proportions - Mobile optimized */}
          <motion.div 
            className="relative mb-6 sm:mb-8 max-w-5xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            style={{ transition: "transform 0.3s ease" }}
          >
            {/* Subtle Background Container - Mobile optimized */}
            <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-xl border border-gray-200/50">
              {/* Main Image Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/assets/features.avif"
                  alt="ChatPersona AI Features Demo"
                  width={1000}
                  height={750}
                  className="w-full h-auto rounded-xl sm:rounded-2xl hover:shadow-3xl transition-all duration-300"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl sm:rounded-2xl"></div>
                
                {/* Floating Feature Highlights - Mobile optimized */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Live Demo</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-2 shadow-lg border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">AI Powered</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements - Mobile optimized */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Benefits Grid with Expandable Cards - Mobile optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-start">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon === "Cpu" ? Cpu : 
                                 benefit.icon === "Rocket" ? Rocket : 
                                 benefit.icon === "Users" ? Users : 
                                 benefit.icon === "Target" ? Target : 
                                 benefit.icon === "GraduationCap" ? GraduationCap : 
                                 benefit.icon === "Languages" ? Languages : Cpu;
            
            const isExpanded = expandedCards.has(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 text-center cursor-pointer hover:border-purple-300/50 h-fit touch-manipulation"
                whileHover={{ 
                  rotateY: 3,
                  rotateX: 3,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleCard(index);
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                layout
              >
                {/* Animated Background with Morphing Gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(168, 85, 247, 0.05))",
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating Micro-animations */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full opacity-40"
                      style={{
                        left: `${15 + (i * 20)}%`,
                        top: `${20 + (i * 15)}%`
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 p-4 sm:p-6 card-content min-h-fit">
                  {/* Enhanced Icon with 3D Rotation - Mobile optimized */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white mb-4 sm:mb-6 shadow-xl mx-auto"
                    whileHover={{ 
                      rotateY: 180,
                      scale: 1.15,
                      transition: { duration: 0.6 }
                    }}
                    animate={{
                      boxShadow: [
                        "0 10px 25px rgba(168, 85, 247, 0.3)",
                        "0 15px 35px rgba(168, 85, 247, 0.4)",
                        "0 10px 25px rgba(168, 85, 247, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 
                      }}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.div>
                  </motion.div>
                  
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                    {benefit.description}
                  </p>
                  
                  {/* Expand/Collapse Button with Click Indicator - Mobile optimized */}
                  <motion.div 
                    className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs mb-3 sm:mb-4 group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-green-500 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    />
                    <span className="text-gray-500 font-medium text-xs">Active</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                      ) : (
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                      )}
                    </motion.div>
                    <span className="text-xs text-gray-400 group-hover:text-purple-500 transition-colors duration-200 hidden sm:inline">
                      {isExpanded ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </motion.div>
                  
                  {/* Expandable Content */}
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        key={`expanded-${index}`}
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 sm:pt-4 border-t border-gray-200">
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                            {benefit.expandedContent}
                          </p>
                          
                          {/* Feature List - Mobile optimized */}
                          <div className="space-y-1 sm:space-y-2">
                            <h5 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">Key Features:</h5>
                            <div className="grid grid-cols-1 gap-1 sm:gap-2">
                              {benefit.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                  className="flex items-center space-x-1 sm:space-x-2 text-xs text-gray-600"
                                >
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                                  <span className="text-xs">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  
                  {/* Magnetic Hover Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-300/30 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Installation & Usage Steps - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Get Started with ChatPersona AI</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Follow these simple steps to transform your OnlyFans revenue with AI-powered conversations
            </p>
          </div>

          {/* Step Cards Grid - Mobile optimized */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cp-purple to-purple-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                1
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Download Extension</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Get the ChatPersona AI extension from Chrome Web Store</p>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs">Chrome Store</span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cp-green to-green-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                2
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Sign Up</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Create your account on <a href="https://app.chatpersona.ai" className="text-cp-purple hover:underline font-medium">app.chatpersona.ai</a></p>
              <div className="space-y-1 text-xs text-gray-500">
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                  No credit card required
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                  7 day free trial
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cp-orange to-orange-600 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                3
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Connect Account</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Link your OnlyFans account and configure your preferences</p>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cp-orange rounded-full mr-2"></div>
                  Connect OnlyFans
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-cp-orange rounded-full mr-2"></div>
                  Set preferences
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                4
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Start Earning</h4>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Choose your persona and watch your revenue increase</p>
              <div className="grid grid-cols-3 gap-1 text-xs">
                <div className="text-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink-100 rounded-full mx-auto mb-1"></div>
                  <span className="text-gray-600 text-xs">Women</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-100 rounded-full mx-auto mb-1"></div>
                  <span className="text-gray-600 text-xs">Men</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-purple-100 rounded-full mx-auto mb-1"></div>
                  <span className="text-gray-600 text-xs">LGBTQ+</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <button className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-3 sm:mb-4 w-full sm:w-auto text-base sm:text-lg touch-manipulation">
              <span className="relative z-10">Start Your Free Trial Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm">Join thousands of creators already earning more with AI</p>
          </motion.div>
        </motion.div>


        {/* New: Testimonial Quote - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-4xl text-cp-purple mb-3 sm:mb-4">"</div>
            <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed">
              "ChatPersona AI completely transformed my revenue. I went from making $500/month to over $5,000/month in just 3 months. The AI responses are so natural, my subscribers can't tell the difference!"
            </blockquote>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cp-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">S</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm sm:text-base">Sarah M.</div>
                <div className="text-xs sm:text-sm text-gray-600">Top 1% OnlyFans Creator</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

