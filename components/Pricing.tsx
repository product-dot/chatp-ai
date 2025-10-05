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
    <section id="pricing" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
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
              Simple, Transparent
            </span>
            <br />
            <span className="text-gray-800 staggered-text">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto staggered-text">
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
              className={`relative rounded-2xl border-2 ${plan.popular ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50' : 'border-gray-200 bg-white/80'} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{ 
                minHeight: '500px'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
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
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300'
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
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">7 Day Free Trial</h3>
            <p className="text-lg mb-6">
              Experience the benefits with our 7 day free trial.
              <br />
              <strong>No Credit Card Required!</strong>
            </p>
            <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
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

