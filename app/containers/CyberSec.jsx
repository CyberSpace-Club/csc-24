import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Database } from "lucide-react";
import Coding from "../../assets/coding.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const CyberSec = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#fe8c32] rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f8be19] rounded-full filter blur-[128px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-6xl font-bold text-white mb-16 relative">
            What is
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#fe8c32] to-[#f8be19]">
              Cyber Security?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Technologies, processes, and practices designed to protect
                networks, devices, programs, and data from attack, damage, or
                unauthorized access. The cyberattacks are usually aimed at
                accessing, changing, or destroying sensitive information;
                extorting money from users; or interrupting normal business
                processes.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Shield, text: "Network Protection" },
                  { icon: Lock, text: "Data Security" },
                  { icon: Server, text: "System Defense" },
                  { icon: Database, text: "Privacy Guard" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    variants={fadeInUp}
                    className="flex items-center space-x-3 bg-gray-900/50 p-4 rounded-lg"
                  >
                    <item.icon className="w-6 h-6 text-[#fe8c32]" />
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src={Coding}
                  height={500}
                  width={500}
                  className="rounded-lg border-2 border-[#fe8c32] shadow-2xl shadow-[#fe8c32]/20"
                  alt="Cyber Security Illustration"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/40 to-transparent rounded-lg" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeInUp}
            className="mt-16"
          >
            <h3 className="text-3xl font-semibold text-[#fe8c32] mb-6">
              Why is Cyber Security Important?
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Cybersecurity is important because it protects all categories of
              data from theft and damage. This includes sensitive data,
              personally identifiable information (PII), protected health
              information (PHI), personal information, intellectual property,
              data, and governmental and industry information systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberSec;
