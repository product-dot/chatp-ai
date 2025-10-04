'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, MessageCircle, Brain, Zap, Shield, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "BOOST PPV Sales 10x 🚀",
      description: "Make your subs unlock 10 times more PPVs!",
      color: "bg-cp-purple"
    },
    {
      icon: "💰",
      title: "GET 5x more TIPS 💰",
      description: "Our users report more tips everyday from hundreds of users!",
      color: "bg-cp-green"
    },
    {
      icon: "🥵",
      title: "Spicy Conversations 🌶️",
      description: "Your subscribers will love you more than ever before!",
      color: "bg-cp-purple"
    }
  ];

  const benefits = [
    {
      icon: "🤖",
      title: "Adaptive AI 🤖",
      description: "Our AI understands subscriber psychology and keeps them engaged, increasing chances of tips"
    },
    {
      icon: "⚡",
      title: "Super Easy to Use 🤩",
      description: "Just install and start using the extension with a quick sign-up process"
    },
    {
      icon: "🎨",
      title: "Customizable and Fun 🎨",
      description: "Choose from 8 distinct personas with adjustable traits, for the best tailored-to-you experience"
    },
    {
      icon: "📈",
      title: "Increase Revenue and Grow Subscribers 🤑",
      description: "Increase revenue with PPV content sales and higher tips from engaged users"
    },
    {
      icon: "🧠",
      title: "Brains of 2000+ Writers 🧠",
      description: "Our AI possesses the intellect of over 2000 writers, swiftly deciphering dialogues and producing tailored replies"
    },
    {
      icon: "🌍",
      title: "Multi-Language Support 🌍",
      description: "Chat with your audience in multiple languages - English, Spanish, French, German, and more"
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Blow Paint Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Purple Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 15, -10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-40 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 19, 0.25) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Green Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -25, 35, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [0, -20, 25, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-16 w-40 h-36 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 100%)',
            borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
            filter: 'blur(35px)'
          }}
        />
        
        {/* Orange Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 30, -15, 0]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/3 w-36 h-32 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 100%)',
            borderRadius: '50% 50% 80% 20% / 40% 70% 30% 60%',
            filter: 'blur(45px)'
          }}
        />
        
        {/* Pink Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -35, 25, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.1, 1],
            rotate: [0, -25, 20, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-1/4 w-44 h-40 blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.20) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 100%)',
            borderRadius: '30% 70% 50% 50% / 70% 30% 70% 30%',
            filter: 'blur(50px)'
          }}
        />
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
          <h2 className="heading-secondary gradient-text mb-4">Using ChatPersona AI ✨</h2>
        </motion.div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${feature.color} text-white mb-6 text-4xl`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Centered Image with Hover Effects */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            style={{ transition: "transform 0.3s ease" }}
          >
            <Image
              src="/assets/features.avif"
              alt="ChatPersona AI Features Demo"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl mx-auto hover:shadow-3xl transition-shadow duration-300"
            />
          </motion.div>
          
          {/* Text Content Below Image with Staggered Animation */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="heading-secondary gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              See ChatPersona AI in Action
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Experience how our AI seamlessly integrates with OnlyFans to boost your revenue and engagement.
            </motion.p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center justify-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-cp-purple rounded-full"></div>
                <span>Real-time chat automation</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-cp-green rounded-full"></div>
                <span>Personalized responses</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center space-x-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-cp-orange rounded-full"></div>
                <span>Revenue optimization</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cp-purple text-white mb-4 text-2xl">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-bold mb-3">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Installation & Usage Steps - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-secondary gradient-text mb-4">Get Started with ChatPersona AI</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to transform your OnlyFans revenue with AI-powered conversations
            </p>
          </div>

          {/* Step Cards */}
          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cp-purple to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-rifton font-bold text-gray-900 mb-2">Download Chrome Extension</h4>
                <p className="text-gray-600 mb-4">Get the ChatPersona AI extension from the Google Chrome Web Store</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">Chrome Web Store</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Available on Chrome only</span>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cp-green to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-rifton font-bold text-gray-900 mb-2">Get Started & Sign Up</h4>
                <p className="text-gray-600 mb-4">Click on "Get started" and sign-up on <a href="https://app.chatpersona.ai" className="text-cp-purple hover:underline font-medium">app.chatpersona.ai</a></p>
                <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    No credit card required
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    7 day free trial included
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cp-orange to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-rifton font-bold text-gray-900 mb-2">Select Your Persona 🥷</h4>
                <p className="text-gray-600 mb-4">Choose from our diverse collection of AI personas and chat like a pro! 🚀</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-cp-orange rounded-full mr-3"></div>
                    Connect your OnlyFans account
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-cp-orange rounded-full mr-3"></div>
                    Set your response preferences
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-cp-orange rounded-full mr-3"></div>
                    Configure AI personality settings
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-rifton font-bold text-gray-900 mb-2">Choose Your Persona</h4>
                <p className="text-gray-600 mb-4">Select from our diverse collection of AI personas that match your brand</p>
                <div className="grid grid-cols-3 gap-2 max-w-md mx-auto md:mx-0">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-pink-100 rounded-full mx-auto mb-1"></div>
                    <span className="text-xs text-gray-600">Women</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-1"></div>
                    <span className="text-xs text-gray-600">Men</span>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-1"></div>
                    <span className="text-xs text-gray-600">LGBTQ+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-xl font-rifton font-bold text-gray-900 mb-2">Start Earning</h4>
                <p className="text-gray-600 mb-4">Enable the AI and watch your revenue increase with automated, engaging conversations</p>
                <div className="flex items-center justify-center md:justify-start space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cp-green">10x</div>
                    <div className="text-gray-500">Revenue Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cp-purple">24/7</div>
                    <div className="text-gray-500">AI Responses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cp-orange">5x</div>
                    <div className="text-gray-500">More Tips</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary text-lg px-12 py-4 mb-4">
              Start Your Free Trial Now
            </button>
            <p className="text-gray-500 text-sm">Join thousands of creators already earning more with AI</p>
          </motion.div>
        </motion.div>

        {/* New: Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-secondary gradient-text mb-4">Why Choose ChatPersona AI?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features that make ChatPersona AI the #1 choice for content creators
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-cp-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Advanced AI Technology</h4>
                  <p className="text-gray-600">Powered by cutting-edge machine learning algorithms trained on millions of successful conversations</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-cp-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Lightning Fast Setup</h4>
                  <p className="text-gray-600">Get started in under 5 minutes with our intuitive setup process and instant activation</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-cp-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">24/7 Customer Support</h4>
                  <p className="text-gray-600">Get instant help from our dedicated support team whenever you need assistance</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="premium-features-card bg-gradient-to-br from-cp-purple/10 to-cp-green/10 rounded-2xl p-8 border border-cp-purple/20 relative overflow-hidden">
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{ 
                      x: [0, 20, -20, 0],
                      y: [0, -20, 20, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-cp-purple/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, -15, 15, 0],
                      y: [0, 15, -15, 0],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cp-green/30 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      x: [0, 25, -25, 0],
                      y: [0, -25, 25, 0],
                      scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-1/2 left-4 w-1 h-1 bg-cp-orange/30 rounded-full"
                  />
                </div>
                
                <div className="relative z-10 h-80 flex items-center justify-center">
                  {/* Central Animated Core */}
                  <motion.div 
                    className="relative w-32 h-32 flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {/* Main Central Diamond with Logo */}
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-lg transform rotate-45 relative flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(168, 85, 247, 0.4)",
                          "0 0 40px rgba(168, 85, 247, 0.6)",
                          "0 0 20px rgba(168, 85, 247, 0.4)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Inner Glow */}
                      <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
                      
                      {/* Logo Container */}
                      <motion.div
                        className="relative z-10 transform -rotate-45"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Logo - Purple Smiling Devil Emoji */}
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-3xl">
                            😈
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {/* Orbiting Stars */}
                      <motion.div 
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                      <motion.div 
                        className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5
                        }}
                      />
                    </motion.div>

                    {/* Floating Particles */}
                    <motion.div
                      className="absolute inset-0"
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/60 rounded-full"
                          style={{
                            left: `${20 + (i * 10)}%`,
                            top: `${15 + (i * 8)}%`
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Pulsing Rings */}
                    <motion.div
                      className="absolute inset-0 border-2 border-purple-300/30 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 border border-pink-300/20 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.2, 0, 0.2]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* New: Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl text-cp-purple mb-4">"</div>
            <blockquote className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              "ChatPersona AI completely transformed my revenue. I went from making $500/month to over $5,000/month in just 3 months. The AI responses are so natural, my subscribers can't tell the difference!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-cp-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Top 1% OnlyFans Creator</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

