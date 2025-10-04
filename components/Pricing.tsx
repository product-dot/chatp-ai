'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$15",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "2,000 response generations",
        "Human like AI",
        "Super Easy to Use",
        "Integrated With OnlyFans"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Premium",
      price: "$50",
      period: "/month",
      description: "Most popular choice",
      features: [
        "5,000 response generations",
        "2x More Human Like AI",
        "Super Easy to Use",
        "Integrated With OnlyFans",
        "Boost 10x PPV Sales"
      ],
      cta: "Get Started",
      popular: true,
      color: "border-cp-purple"
    },
    {
      name: "VIP",
      price: "$99",
      period: "/month",
      description: "For power users",
      features: [
        "10,000 response generations",
        "10x More Human Like AI",
        "Super Easy to Use",
        "Boost 10x PPV Sales",
        "Priority Support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Blow Paint Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Purple Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 35, -25, 0],
            y: [0, -25, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 25, -15, 0]
          }}
          transition={{ 
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-24 left-12 w-36 h-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 19, 0.25) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 100%)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            filter: 'blur(50px)'
          }}
        />
        
        {/* Green Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -30, 40, 0],
            y: [0, 35, -20, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [0, -30, 20, 0]
          }}
          transition={{ 
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-44 h-36 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(34, 197, 94, 0.15) 50%, transparent 100%)',
            borderRadius: '40% 60% 50% 50% / 70% 30% 70% 30%',
            filter: 'blur(45px)'
          }}
        />
        
        {/* Orange Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 20, -35, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 40, -25, 0]
          }}
          transition={{ 
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/3 w-36 h-28 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 100%)',
            borderRadius: '50% 50% 80% 20% / 40% 70% 30% 60%',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Pink Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, -40, 25, 0],
            y: [0, 20, -35, 0],
            scale: [1, 0.9, 1.1, 1],
            rotate: [0, -35, 30, 0]
          }}
          transition={{ 
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-24 right-1/4 w-48 h-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.20) 0%, rgba(236, 72, 153, 0.12) 50%, transparent 100%)',
            borderRadius: '30% 70% 50% 50% / 70% 30% 70% 30%',
            filter: 'blur(55px)'
          }}
        />
        
        {/* Blue Blow Paint */}
        <motion.div
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -25, 30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 20, -30, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-44 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.10) 50%, transparent 100%)',
            borderRadius: '25% 75% 35% 65% / 65% 35% 75% 25%',
            filter: 'blur(60px)'
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
          <h2 className="heading-secondary gradient-text mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI features and OnlyFans integration.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border-2 ${plan.color} shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex flex-col ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                minHeight: '500px'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cp-purple text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cp-green mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 mt-auto ${
                  plan.popular
                    ? 'bg-cp-purple text-white hover:bg-purple-700'
                    : 'bg-cp-green text-black hover:bg-green-300'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cp-blue/55 via-pink-500/55 to-cp-green/55 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">7 Day Free Trial 💯</h3>
            <p className="text-lg mb-6">
              Experience the benefits with our 7 day free trial.
              <br />
              <strong>No Credit Card Required!</strong>
            </p>
            <button className="bg-white text-cp-purple font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </motion.div>

        {/* Revenue Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Our users see a 10x increase in revenue!</h3>
          <p className="text-lg text-gray-600">Join thousands of creators already boosting their revenue with our AI</p>
        </motion.div>
      </div>
    </section>
  );
}

