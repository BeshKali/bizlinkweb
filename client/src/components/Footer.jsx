import React from "react";
import { Link } from "react-router-dom";
import { Code, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0f1a] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 transition-colors duration-700">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="transition-colors duration-500">
            &copy; {new Date().getFullYear()} BizLink. All rights reserved.
          </span>
          <Zap 
            size={16} 
            className="text-bizYellow dark:text-bizBlue animate-pulse transition-colors duration-500"
          />
        </div>

        {/* Right: Developer credit */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="transition-colors duration-500">Developed by</span>
          <Link 
            to="https://codeworld-tech.vercel.app" 
            target="_blank" 
            className="
              inline-flex items-center gap-1 text-bizBlue dark:text-bizYellow
              font-semibold hover:text-bizRed hover:scale-105 transition-all duration-500
            "
          >
            <Code className="animate-bounce-slow" size={16} /> CodeWorld Technologies
          </Link>
        </div>

      </div>

      {/* Animated gradient accent */}
      <div className="w-full h-[3px] mt-2 bg-gradient-to-r from-bizBlue/50 via-bizYellow/50 to-bizRed/50 opacity-40 rounded-full animate-gradient-x transition-all duration-1000" />
      
      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }

          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}
      </style>
    </footer>
  );
}
