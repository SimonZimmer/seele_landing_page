import Image from 'next/image';
import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';
import { TestimonialSection } from '@/components/TestimonialSection';
import { WavyDivider } from '@/components/WavyDivider';
import { Contact } from '@/components/Contact';
import { TechnicalSpecs } from '@/components/TechnicalSpecs';
import { DownloadButton } from '@/components/DownloadButton';
import { BrevoSignup } from '@/components/BrevoSignup';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
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
            <DownloadButton />
          </div>

          <div className="md:w-2/3">
            <Image
              src="/images/seele-screenshot.png"
              alt="SEELE VST Plugin Interface"
              width={1920}
              height={1024}
              className="rounded-lg"
              priority={true}
            />
          </div>
        </div>
        <WavyDivider />

        <TestimonialSection />

        <FeaturesSection />

        <section className="mt-24 space-y-16 flex justify-center">
          <div className="md:w-2/3">
            <video width="100%" height="auto" autoPlay loop muted playsInline>
              <source src="/images/seele-screenshot.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <TechnicalSpecs />

        <BrevoSignup />

        <Contact />
      </div>

      <Footer />
    </main>
  );
}
