"use client";

import { useState, useEffect } from "react";
import { Send, Code, Terminal, Cpu, Database, ChevronDown } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Hero Icon */}
          <div className="relative inline-block animate-float">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"></div>
            <Code className="w-16 h-16 text-orange-500 mx-auto mb-6 relative z-10 animate-pulse-slow" />
          </div>

          {/* Coming Soon Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold">
              Coming Soon
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Dive Into
            <span className="text-orange-500 relative mx-2">
              <span className="relative z-10">Tech</span>
              <span className="absolute inset-x-0 bottom-0 h-3 bg-orange-500/20 transform -skew-x-12"></span>
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-300">
              with Cyberspace Club
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Unlock the world of coding excellence with our weekly tech insights,
            hands-on tutorials, and exclusive developer resources.
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            className={`max-w-md mx-auto transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-orange-500/25"
              >
                Join
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-orange-500/60" />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Terminal,
              title: "Code Mastery Series",
              description:
                "Weekly deep dives into advanced programming concepts, algorithms, and coding best practices.",
              delay: 0,
            },
            {
              icon: Cpu,
              title: "Tech Stack Spotlight",
              description:
                "Explore cutting-edge frameworks, tools, and technologies shaping the future of development.",
              delay: 200,
            },
            {
              icon: Database,
              title: "Developer Resources",
              description:
                "Exclusive access to code snippets, boilerplates, and optimization techniques.",
              delay: 400,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-orange-500/10 ${
                isVisible ? "animate-slide-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <feature.icon className="w-10 h-10 text-orange-500 mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        {/* <div
          className={`mt-20 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 mb-4">
            Contributors from leading tech companies
          </p>
          <div className="flex justify-center gap-8 opacity-50">
            <img
              src="/api/placeholder/128/32"
              alt="Tech Company 1"
              className="h-8 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
            <img
              src="/api/placeholder/128/32"
              alt="Tech Company 2"
              className="h-8 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
            <img
              src="/api/placeholder/128/32"
              alt="Tech Company 3"
              className="h-8 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}