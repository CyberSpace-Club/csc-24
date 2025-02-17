import React from "react";
import AboutLogo from "../../assets/aboutlogo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fe8c32] rounded-full filter blur-[128px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f8be19] rounded-full filter blur-[128px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-7xl font-bold text-white mb-16">About Us</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative group">
                <Image
                  src={AboutLogo}
                  height={300}
                  width={300}
                  className="transition-transform duration-500 group-hover:scale-105"
                  alt="About Us Logo"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-[#fe8c32]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={fadeInUp}
              className="text-left space-y-6"
            >
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#fe8c32] to-[#f8be19]">
                CYBER SPACE CLUB
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We aim to build an active society for students interested in the
                domain of cyber security and uplift this culture in MUJ.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Learn", desc: "Expert-led workshops" },
                  { title: "Grow", desc: "Hands-on experience" },
                  { title: "Connect", desc: "Network with peers" },
                  { title: "Achieve", desc: "Build your portfolio" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    variants={fadeInUp}
                    className="bg-gray-900/50 p-4 rounded-lg"
                  >
                    <h4 className="text-[#fe8c32] font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
