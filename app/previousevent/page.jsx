"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ParticlesBackground } from "../components/ParticlesBackground";

const events = [
  {
    id: 1,
    name: "Cyber Security Workshop 2024",
    image: "/events/event1.jpg",
    description:
      "Join us for an intensive workshop on modern cyber security practices. Learn about threat detection, prevention, and the latest security tools.",
    date: "March 15, 2024",
    location: "Virtual Event",
    registrationLink: "https://example.com/register",
  },
  {
    id: 2,
    name: "Ethical Hacking Bootcamp",
    image: "/events/event2.jpg",
    description:
      "A hands-on bootcamp covering ethical hacking methodologies, penetration testing, and security assessments.",
    date: "April 20, 2024",
    location: "MUJ Campus",
    registrationLink: "https://example.com/register",
  },
  {
    id: 3,
    name: "CTF Competition",
    image: "/events/event3.jpg",
  },
  // Add more events as needed
];

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1a1a1a] rounded-xl max-w-3xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[300px]">
          <Image
            src={event.image}
            alt={event.name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{event.name}</h2>
          <div className="flex gap-4 text-gray-400 mb-4">
            <p>{event.date}</p>
            <p>•</p>
            <p>{event.location}</p>
          </div>
          <p className="text-gray-300 mb-6">{event.description}</p>
          <div className="flex gap-4">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Register Now
            </a>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EventCard = ({ name, image, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const PreviousEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text"
        >
          Our Events
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              {...event}
              index={index}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreviousEvents;
