import React from "react";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/cs.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-[#f2f2f2] py-16">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-3">
        {/* Brand Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center justify-center">
            {/* Replace with your actual logo */}
            <div className="w-32 h-32  opacity-90 rounded-lg flex items-center justify-center text-white font-bold">
              <Image
                src={Logo}
                objectFit="contain"
                className="filter drop-shadow-2xl"
              />
            </div>
            <h2 className="mt-4 text-xl font-bold tracking-wide">
              CYBER SPACE CLUB
            </h2>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-[#ff8000] mb-6">Contact Us</h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#ff8000]" />
                <a
                  href="tel:8977622044"
                  className="hover:text-[#ff8000] transition-colors"
                >
                  +91-89776 22044
                </a>
              </div>
              <div className="text-sm opacity-80">
                <p className="font-semibold">Srivatsa Palepu</p>
                <p className="text-[#ff8000]">Chairperson</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-[#ff8000]" />
                <a
                  href="tel:7676176633"
                  className="hover:text-[#ff8000] transition-colors"
                >
                  +91-76761 76633
                </a>
              </div>
              <div className="text-sm opacity-80">
                <p className="font-semibold">Chitransh Saxena</p>
                <p className="text-[#ff8000]">Vice Chairperson</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-5 h-5 text-[#ff8000]" />
              <a
                href="mailto:cyber.space@muj.manipal.edu"
                className="text-sm hover:text-[#ff8000] transition-colors"
              >
                cyber.space@muj.manipal.edu
              </a>
            </div>
          </div>
        </div>

        {/* Address & Social Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-[#ff8000] mb-6">Location</h3>
            <div className="flex items-start justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 text-[#ff8000] mt-1 flex-shrink-0" />
              <p className="text-sm opacity-80">
                Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza,
                Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#ff8000] mb-6">Connect</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/csc_muj/"
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:bg-[#ff8000] rounded-full transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/cyber-space-club/"
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:bg-[#ff8000] rounded-full transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
