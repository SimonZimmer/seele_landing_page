export function TechnicalSpecs() {
    return (
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
    );
}
