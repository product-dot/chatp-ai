'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description - Mobile optimized */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="text-xl sm:text-2xl">😈</div>
              <span className="font-bold text-lg sm:text-xl">CHATPERSONA AI</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Boost your revenue with AI-powered personas that engage your audience and increase your earnings by 10x.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="btn-primary text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 w-full sm:w-auto">Get Extension</button>
              <button className="btn-secondary text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 w-full sm:w-auto">Sign Up</button>
            </div>
          </div>

          {/* Quick Links - Mobile optimized */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#personas" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Personas</a></li>
              <li><a href="#pricing" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Support - Mobile optimized */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left mb-3 sm:mb-0">
            © 2024 ChatPersonas.ai. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Discord</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

