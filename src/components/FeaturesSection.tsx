import { FaMusic, FaClock, FaVolumeUp, FaSlidersH, FaCheckCircle, FaPalette} from "react-icons/fa";


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

