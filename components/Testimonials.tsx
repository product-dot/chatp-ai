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
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Dynamic Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Purple Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 20, -15, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-8 w-36 h-32 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 19, 0.25) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)',
            borderRadius: '70% 30% 60% 40% / 40% 70% 30% 60%',
            filter: 'blur(45px)'
          }}
        />
        
        {/* Green Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -25, 35, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.3, 1],
            rotate: [0, -25, 30, 0]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-16 w-40 h-32 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 100%)',
            borderRadius: '50% 50% 80% 20% / 60% 40% 60% 40%',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Orange Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 30, -20, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-1/4 w-32 h-24 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 100%)',
            borderRadius: '40% 60% 70% 30% / 50% 50% 50% 50%',
            filter: 'blur(35px)'
          }}
        />
        
        {/* Pink Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -35, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [0, -30, 25, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-1/3 w-44 h-36 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.20) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 100%)',
            borderRadius: '60% 40% 50% 50% / 70% 30% 70% 30%',
            filter: 'blur(50px)'
          }}
        />

        {/* Blue Blow Paint - New */}
        <motion.div
          animate={{ 
            x: [0, 40, -25, 0],
            y: [0, -15, 35, 0],
            scale: [1, 1.4, 0.6, 1],
            rotate: [0, 45, -30, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-48 h-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.20) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 100%)',
            borderRadius: '30% 70% 40% 60% / 60% 40% 80% 20%',
            filter: 'blur(55px)'
          }}
        />

        {/* Yellow Blow Paint - New */}
        <motion.div
          animate={{ 
            x: [0, -20, 45, 0],
            y: [0, 25, -40, 0],
            scale: [1, 0.7, 1.5, 1],
            rotate: [0, -40, 35, 0]
          }}
          transition={{ 
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-36 h-28 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)',
            borderRadius: '45% 55% 65% 35% / 55% 45% 55% 45%',
            filter: 'blur(45px)'
          }}
        />

        {/* Red Blow Paint - New */}
        <motion.div
          animate={{ 
            x: [0, 35, -40, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 25, -45, 0]
          }}
          transition={{ 
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-40 h-32 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.20) 0%, rgba(220, 38, 38, 0.12) 50%, transparent 100%)',
            borderRadius: '55% 45% 70% 30% / 65% 35% 65% 35%',
            filter: 'blur(50px)'
          }}
        />

        {/* Teal Blow Paint - New */}
        <motion.div
          animate={{ 
            x: [0, -30, 25, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, -35, 20, 0]
          }}
          transition={{ 
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 right-1/3 w-32 h-36 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.22) 0%, rgba(13, 148, 136, 0.14) 50%, transparent 100%)',
            borderRadius: '40% 60% 50% 50% / 70% 30% 70% 30%',
            filter: 'blur(48px)'
          }}
        />

        {/* Indigo Blow Paint - New */}
        <motion.div
          animate={{ 
            x: [0, 25, -35, 0],
            y: [0, -30, 40, 0],
            scale: [1, 0.9, 1.2, 1],
            rotate: [0, 30, -25, 0]
          }}
          transition={{ 
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 w-44 h-38 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(79, 70, 229, 0.12) 50%, transparent 100%)',
            borderRadius: '35% 65% 45% 55% / 60% 40% 60% 40%',
            filter: 'blur(52px)'
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
          <h2 className="heading-secondary gradient-text mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of creators who have already transformed their revenue with ChatPersona AI
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#F2E9F0' }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              2,345 creators are already boosting their revenue with our AI!
            </h3>
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cp-purple">10x</div>
                <div className="text-gray-600">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cp-green">5x</div>
                <div className="text-gray-600">More Tips</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cp-orange">2,345</div>
                <div className="text-gray-600">Active Creators</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

