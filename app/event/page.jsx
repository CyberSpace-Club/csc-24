"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { events } from "@/data/events";

const EventModal = ({ event, onClose }) => {
  if (!event) return null;
  
  // Check if the event date is in the past
  const isPastEvent = new Date(event.date) < new Date();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-2 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1a1a1a] rounded-xl w-full max-w-[95%] sm:max-w-lg overflow-hidden my-2 sm:my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[350px] xs:h-[400px] sm:h-[450px]">
          <Image
            src={event.image}
            alt={event.name}
            fill
            priority
            className="object-contain p-2"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
        <div className="p-3 sm:p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {event.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-gray-400 mb-3 text-sm">
            <p>{event.date}</p>
            <p className="hidden sm:block">•</p>
            <p>{event.location}</p>
          </div>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {event.description}
          </p>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
            {!isPastEvent ? (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-linear-to-r from-[#fe8d32] to-[#f8be19] rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Register Now
              </a>
            ) : (
              <span className="px-6 py-2 bg-gray-700 rounded-lg text-gray-300 text-center cursor-not-allowed">
                Registration Closed
              </span>
            )}
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

const EventCard = ({ event, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
        <Image
          src={event.image}
          alt={event.name}
          fill
          priority
          className="group-hover:scale-105 transition-transform duration-300 object-contain bg-black/40"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-linear-to-t from-black/90 via-black/50 to-transparent">
          <h3 className="text-2xl font-bold text-white">{event.name}</h3>
          {event.tags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-black/50 text-gray-300 px-2 py-1 rounded-sm backdrop-blur-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PreviousEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPastEvents, setShowPastEvents] = useState(false);
  
  // Separate past and upcoming events
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);
  
  // Display events based on the selected tab
  const displayEvents = showPastEvents ? pastEvents : upcomingEvents;

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16 pt-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8 bg-linear-to-r from-[#fe8d32] to-[#f8be19] text-transparent bg-clip-text"
        >
          Our Events
        </motion.h1>
        
        {/* Tab selector for past and upcoming events */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1a1a1a] rounded-full p-1 flex">
            <button 
              onClick={() => setShowPastEvents(false)}
              className={`px-6 py-2 rounded-full transition-all ${!showPastEvents ? 'bg-linear-to-r from-[#fe8d32] to-[#ce9700] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Upcoming Events
            </button>
            <button 
              onClick={() => setShowPastEvents(true)}
              className={`px-6 py-2 rounded-full transition-all ${showPastEvents ? 'bg-linear-to-r from-[#fe8d32] to-[#ce9700] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Past Events
            </button>
          </div>
        </div>
        
        {displayEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-xl">
              Coming Soon
            </p>
          </div>
        )}
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
