'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { SiIntel } from "react-icons/si";
import { FaMusic, FaClock, FaVolumeUp, FaSlidersH, FaInstagram, FaSoundcloud, FaCheckCircle, FaPalette, FaDownload, FaApple, FaCoffee, FaEnvelope, FaWindows } from "react-icons/fa";


export function FeaturesSection() {
  const features = [
    {
      icon: <FaMusic />,
      title: "High Quality pitch-shifting",
      description: "FFT-based pitch-shifting with phase preservation",
    },
    {
      icon: <FaClock />,
      title: "Delay control",
      description: "Delay each voice for diffusing the mixed signal in the time domain",
    },
    {
      icon: <FaVolumeUp />,
      title: "Level & mute control",
      description: "Add and mix-in each pitch-shifted voice individually",
    },
    {
      icon: <FaSlidersH />,
      title: "Smoothed parameters",
      description: "Ramped parameter processing to provide smooth transitions while automating",
    },
    {
      icon: <FaCheckCircle />,
      title: "Verified by pluginval",
      description: "Plugin integrity verified by Traktion's pluginval tool with highest strictness-level",
    },
    {
      icon: <FaPalette />,
      title: 'SEELE approved UI-design',
      description: 'Inspired by Hideaki Anno\'s animated series "Neon Genesis Evangelion"',
    },
  ];

  return (
    <section className="mt-12 space-y-16">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
        Key Features
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="space-y-4 p-6 border-2 border-red-600 rounded-lg hover:shadow-purple-900/20 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 text-red-400">
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
    return (
  <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-400">
    <p>© {new Date().getFullYear()} SEELE. All rights reserved.</p>
    {/* Social Links */}
    <div className="mt-4 flex justify-center gap-4">
      <a
        href="https://www.instagram.com/stories/hidonash/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-500 transition-all duration-300"
      >
        <FaInstagram className="text-2xl" />
      </a>
      <a
        href="https://soundcloud.com/hidonash"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-red-500 transition-all duration-300"
      >
        <FaSoundcloud className="text-2xl" />
      </a>
    </div>
    <p className="mt-2"></p>
  </footer>
  );
}

export function TestimonialSection() {
  return (
    <section className="mt-24 space-y-8 text-center">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
        What Users Are Saying
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-red-600">
          <Image 
            src="/images/hidonash_testimonial.png" 
            alt="User Testimonial" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <p className="text-gray-300 mt-4 max-w-xl italic">
          "SEELE is the perfect tool for processing vocals. It’s almost like I built it myself. Which is exactly what happened."
        </p>
        <p className="text-red-400 font-semibold mt-2">- Hidonash, Music Producer and Software Developer</p>
      </div>
    </section>
  );
}

export function WavyDivider() {
  return (
    <section className="mt-12 space-y-16">
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,50
          C120,90 240,30 360,70
          C480,110 600,10 720,60
          C840,110 960,40 1080,80
          C1200,120 1320,20 1440,50
        "
        stroke="red"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="
          M0,50
          C100,80 200,20 300,60
          C400,100 500,10 600,50
          C700,90 800,30 900,70
          C1000,110 1100,20 1200,60
          C1300,100 1400,40 1440,50
        "
        stroke="red"
        strokeWidth="3"
        fill="none"
        opacity="1"
      />
    </svg>
    </section>
  );
}


export default function Home() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDownloadOptions = () => {
    setShowDownloadOptions((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDownloadOptions(false);
      }
    }

    if (showDownloadOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDownloadOptions]);

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section: Title and CTA */}
          <div className="md:w-1/2 space-y-2">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
                SEELE
              </h1>
              <p className="pb-10 text-xl md:text-2xl text-red-400">
                VST3-plugin for pitch-shifted voice mixing
              </p>
            </div>
              <Link 
                href="https://buymeacoffee.com/simonzimmermann" 
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-purple-300 hover:bg-purple-100 text-black rounded-md transition-all duration-300"
              >
              <FaCoffee className="text-lg" />
                Support My Work
              </Link>
            <div className="flex flex-col gap-2 pt-4 sm:flex-row">
              <div className="relative w-full sm:w-1/2" ref={dropdownRef}>
                <button
                  onClick={toggleDownloadOptions}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r bg-red-600 hover:bg-red-400 text-black rounded-md transition-all duration-300"
                >
                  <FaDownload className="text-lg" />
                  Download Now
                </button>

                {showDownloadOptions && (
                  <div className="absolute mt-2 w-full bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden z-10">
                    <div className="p-1">
                      <a
                        href="https://github.com/SimonZimmer/SEELE/releases/download/20250305-134439/macos_arm64_seele_installer.zip"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
                      >
                        <FaApple className="text-xl" />
                        <div>
                          <p className="font-medium">Apple Silicon</p>
                          <p className="text-xs text-gray-400">
                            For M-series Mac, macOS 11+
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://github.com/SimonZimmer/SEELE/releases/download/20250305-134439/macos_x86_64_seele_installer.zip"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
                      >
                        <div className="flex items-center gap-1">
                          <FaApple className="text-lg" />
                          <SiIntel className="text-sm" />
                        </div>
                        <div>
                          <p className="font-medium">Apple Intel</p>
                          <p className="text-xs text-gray-400">
                            For Intel Mac, macOS 11+
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://github.com/SimonZimmer/SEELE/releases/download/20250305-134439/win_seele_installer.zip"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
                      >
                        <FaWindows className="text-xl" />
                        <div>
                          <p className="font-medium">Windows</p>
                          <p className="text-xs text-gray-400">
                            For Intel/AMD, Windows 11+
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div> 
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-2/3">
              {
              <Image 
                src="/images/seele-screenshot.gif" 
                alt="SEELE VST Plugin Interface" 
                width={1920} 
                height={1024}
                className="rounded-lg"
              />
              }
          </div>
        </div>
        <WavyDivider />

        <TestimonialSection />

        <FeaturesSection />
 
        {/* Image */}
        <section className="mt-24 space-y-16">
          <div className="md:w-full ">
              {
              <Image 
                src="/images/seele-screenshot.png" 
                alt="SEELE VST Plugin Interface" 
                width={1920} 
                height={1024}
                className="rounded-lg"
              />
              }
          </div>
        </section>
        
        {/* Technical Specs */}
        <section id="specs" className="mt-24 space-y-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
            Technical Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-red-600 rounded-lg">
              <h3 className="text-xl font-semibold text-red-400 mb-4">System Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 4GB RAM minimum </li>
                <li>• 500MB free disk space</li>
              </ul>
            </div>
            
            <div className="p-6 border-2 border-red-600 rounded-lg">
              <h3 className="text-xl font-semibold text-red-400 mb-4">Compatibility</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Apple Silicon (M-Series), macOS >= 11 (Big Sur)</li>
                <li>• Apple Intel, macOS >= 11 (Big Sur)</li>
                <li>• Intel/AMD Machine, Windows >= 11</li>
                <li>• VST3-capable DAW</li>
              </ul>
            </div>
          </div>
        </section>
 
        {/* Download Section */}
        <section id="download" className="mt-24 p-8 border-2 border-red-600 rounded-xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
              Questions or Ideas?
            </h2>
            
            <p className="text-gray-300">
              Get in touch if you have any bugs to report, or if you have any suggestions to improve SEELE
            </p>
            <a 
              href="mailto:mail@hidonash.com" 
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r bg-purple-300 hover:bg-purple-100 text-black rounded-md font-medium transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
              mail@simonzimmermann.de
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
