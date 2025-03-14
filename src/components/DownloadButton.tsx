'use client';

import { FaApple, FaDownload, FaWindows } from 'react-icons/fa';
import { SiIntel } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
 
export function DownloadButton() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDownloadOptions = () => {
    setShowDownloadOptions((prev) => !prev);
  };

  useEffect(() => {
    async function fetchDownloadUrls() {
      const filenames = [
        "macos_arm64_seele_installer.zip",
        "macos_x86_64_seele_installer.zip",
        "win_seele_installer.zip",
      ];

      const urls: Record<string, string> = {};
      await Promise.all(
        filenames.map(async (filename) => {
          try {
            const response = await fetch(`/api/get-download-url?filename=${filename}`);
            if (response.ok) {
              const data = await response.json();
              urls[filename] = data.url;
            } else {
              console.error(`Failed to fetch ${filename}`);
            }
          } catch (error) {
            console.error("Error fetching download URL:", error);
          }
        })
      );

      setDownloadUrls(urls);
    }

    fetchDownloadUrls();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <div className="flex flex-col gap-2 pt-4 sm:flex-row">
      <div className="relative w-full sm:w-1/2" ref={dropdownRef}>
        <button
          onClick={toggleDownloadOptions}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r bg-red-600 hover:bg-red-400 text-black rounded-md transition-all duration-300 cursor-pointer"
        >
          <FaDownload className="text-lg" />
          Download Now
        </button>

        {showDownloadOptions && (
          <div className="absolute mt-2 w-full bg-gray-900 border border-gray-800 rounded-md shadow-lg overflow-hidden z-10">
            <div className="p-1">
              <a
                href={downloadUrls["macos_arm64_seele_installer.zip"] || "#"}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              >
                <FaApple className="text-xl" />
                <div>
                  <p className="font-medium">Apple Silicon</p>
                  <p className="text-xs text-gray-400">For M-series Mac, macOS 11+</p>
                </div>
              </a>

              <a
                href={downloadUrls["macos_x86_64_seele_installer.zip"] || "#"}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              >
                <div className="flex items-center gap-1">
                  <FaApple className="text-lg" />
                  <SiIntel className="text-sm" />
                </div>
                <div>
                  <p className="font-medium">Apple Intel</p>
                  <p className="text-xs text-gray-400">For Intel Mac, macOS 11+</p>
                </div>
              </a>

              <a
                href={downloadUrls["win_seele_installer.zip"] || "#"}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 rounded-md transition-colors w-full text-left"
              >
                <FaWindows className="text-xl" />
                <div>
                  <p className="font-medium">Windows</p>
                  <p className="text-xs text-gray-400">For Intel/AMD, Windows 11+</p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

