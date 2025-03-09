'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { SiIntel } from "react-icons/si";
import { FaDownload, FaApple, FaCoffee, FaEnvelope, FaWindows } from "react-icons/fa";

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
                VST3 plugin for pitch-shifted voice mixing
              </p>
            </div>
              <Link 
                href="https://buymeacoffee.com/simonzimmermann" 
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-300 to-purple-100 hover:from-purple-100 hover:to-purple-300 text-black rounded-md transition-all duration-300"
              >
              <FaCoffee className="text-lg" />
                Support My Work
              </Link>
            <div className="flex flex-col gap-2 pt-4 sm:flex-row">
              <div className="relative w-full sm:w-1/2" ref={dropdownRef}>
                <button
                  onClick={toggleDownloadOptions}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-black rounded-md transition-all duration-300"
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

        {/* Wavy Line Section */}
        <section className="mt-12 space-y-16">
          <div className="w-full">
            <svg
              viewBox="0 0 1440 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0,75 
                   C100,50 200,100 300,75 
                   C400,30 500,120 600,75 
                   C700,10 800,140 900,75 
                   C1000,20 1100,130 1200,75 
                   C1300,40 1400,110 1500,75 
                   C1600,30 1700,120 1800,75 
                   C1900,50 2000,100 2100,75 
                   C2200,20 2300,130 2400,75"
                stroke="red"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="mt-24 space-y-16">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-300 to-purple-100 text-transparent bg-clip-text">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4 p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg hover:shadow-purple-900/20 hover:shadow-md transition-all duration-300">
                <div className="text-purple-400 text-xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-red-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

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
            <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg">
              <h3 className="text-xl font-semibold text-red-400 mb-4">System Requirements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 4GB RAM minimum </li>
                <li>• 500MB free disk space</li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg">
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
        <section id="download" className="mt-24 p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
              Questions or Ideas?
            </h2>
            
            <p className="text-gray-300">
              Get in touch if you have any bugs to report, or if you have any suggestions to improve SEELE
            </p>
              <Link 
                href="mailto:mail@simonzimmermann.de" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-300 to-purple-100 hover:from-purple-100 hover:to-purple-300 text-black rounded-md font-medium transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
                  Get In Touch
              </Link>

          </div>          
        </section>
        
        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SEELE. All rights reserved.</p>
          <p className="mt-2"></p>
        </footer>
      </div>
    </main>
  );
}

// Features data
const features = [
  {
    icon: '',
    title: 'High Quality pitch-shifting',
    description: 'FFT-based pitch-shifting with phase preservation'
  },
  {
    icon: '',
    title: 'Delay control',
    description: 'Delay each voice for diffusing the mixed signal in the time domain'
  },
  {
    icon: '',
    title: 'Level & mute control',
    description: 'Add and mix-in each pitch-shifted voice individually'
  },
  {
    icon: '',
    title: 'Smoothed parameters',
    description: 'Ramped parameter processing to provide smooth transitions while automating'
  },
  {
    icon: '',
    title: 'Verfied by pluginval',
    description: 'Plugin integrity verfied by Traktions pluginval tool with highest strictness-level'
  },
  {
    icon: '',
    title: 'SEELE approved UI-design',
    description: 'inspired by Hideaki Anno\'s animated series "Neon Genesis Evangelion"',
  },
];
