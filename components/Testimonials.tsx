'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aliyah",
      role: "Creator",
      content: "ChatPersona.ai truly excels as a resource! My earnings have significantly risen. I adore it! I recommend it to all my fellow creators!",
      rating: 5,
      image: "/assets/testimonials/aaliyah.avif"
    },
    {
      name: "James Greenwood",
      role: "CEO - Creator Arena",
      content: "Our agency started using it for few creators and it's very user friendly! Chatting is like one click now and you can see the numbers increase really quick",
      rating: 5,
      image: "/assets/testimonials/james.avif"
    },
    {
      name: "Anna",
      role: "Freelancer",
      content: "i was drowning in chats and this came to the rescue. can't believe how much it's helped. seriously. the support people are the sweetest! gave me free credits too!",
      rating: 5,
      image: "/assets/testimonials/anna.avif"
    },
    {
      name: "@cutibooti",
      role: "Creator",
      content: "this thing is legit the best. saw a boost in my sales the first week of using it. you gotta try it!",
      rating: 5,
      image: "/assets/testimonials/cuti.webp"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              What Our Users
            </span>
            <br />
            <span className="text-gray-800 staggered-text">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto staggered-text px-2">
            Join thousands of creators who have already transformed their revenue with ChatPersona AI
          </p>
        </motion.div>

        {/* Testimonials Grid - Mobile optimized */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Rating - Mobile optimized */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content - Mobile optimized */}
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Author - Mobile optimized */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              2,345 creators are already boosting their revenue with our AI!
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">10x</div>
                <div className="text-sm sm:text-base text-gray-600">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">5x</div>
                <div className="text-sm sm:text-base text-gray-600">More Tips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">2,345</div>
                <div className="text-sm sm:text-base text-gray-600">Active Creators</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

