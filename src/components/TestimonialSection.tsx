import Image from 'next/image';

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
            width="400"
            height="400"
          />
        </div>
        <p className="text-gray-300 mt-4 max-w-xl italic">
          "SEELE is the perfect tool for processing vocals. It’s almost like I
          built it myself. Which is exactly what happened."
        </p>
        <p className="text-red-400 font-semibold mt-2">
          - Hidonash, Music Producer and Software Developer
        </p>
      </div>
    </section>
  );
}
