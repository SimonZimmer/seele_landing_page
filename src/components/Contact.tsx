'use client';

import { FaEnvelope } from 'react-icons/fa';

export function Contact() {
  return (
    <section
      id="download"
      className="mt-24 p-8 border-2 border-red-600 rounded-xl"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 text-transparent bg-clip-text">
          Questions or Ideas?
        </h2>

        <p className="text-gray-300">
          Get in touch if you have any bugs to report, or if you have any
          suggestions to improve SEELE
        </p>
        <a
          href="mailto:mail@hidonash.com"
          className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r bg-purple-300 hover:bg-purple-100 text-black rounded-md font-medium transition-all duration-300"
        >
          <FaEnvelope className="text-lg" />
          mail@hidonash.com
        </a>
      </div>
    </section>
  );
}
