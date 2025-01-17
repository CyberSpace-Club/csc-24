import React, { useState, useEffect } from "react";
import LogoGif from "../../assets/cscmuj.gif";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Shield, Code } from "lucide-react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle, rgba(254,141,50,0.1) 0%, rgba(248,190,25,0.05) 100%)`,
              animation: `float ${Math.random() * 10 + 20}s infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-64 h-64 mx-auto mb-8"
          >
            <Image
              src={LogoGif}
              layout="fill"
              objectFit="contain"
              className="filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 mb-12"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text">
              CYBER SPACE CLUB
            </h1>
            <h2 className="text-2xl text-gray-300">
              Manipal University Jaipur
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Globe,
                title: "Network",
                desc: "Connect with cyber enthusiasts",
              },
              {
                icon: Shield,
                title: "Learn",
                desc: "Master cybersecurity concepts",
              },
              { icon: Code, title: "Build", desc: "Create secure solutions" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="p-6 rounded-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#fe8d32]" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center space-x-6"
          >
            <Link href="/previousevent">
              <button className="group relative px-8 py-3 text-lg font-medium rounded-md bg-transparent border-2 border-[#fe8d32] text-white hover:bg-[#fe8d32] transition-all duration-300">
                Explore Events
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/notfound">
              <button className="group relative px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-[#fe8d32] to-[#f8be19] text-white hover:shadow-lg hover:shadow-[#fe8d32]/50 transition-all duration-300">
                Join Us
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, 20px) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Header;
