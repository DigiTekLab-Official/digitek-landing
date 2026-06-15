// app/about/page.tsx
export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-blue-500">Digitek Lab</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300">
            Delivering Value Through Strategic Procurement
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            At Digitek Lab, we transform procurement from a cost center into a competitive advantage.
          </p>
        </div>

        {/* The "Authority" Section (Track Record) - ANONYMIZED */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-semibold text-white">Our Track Record</h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            Led by <strong>veteran Aviation Procurement Specialists</strong>, our firm leverages over 15 years of experience managing <strong>AED 6 Billion+</strong> in infrastructure projects across the UAE and India.
          </p>
        </div>

        {/* Core Values (Value Proposition) */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6">Our Core Value Proposition</h2>
          <div className="grid md:grid-cols-1 gap-4">
            
            {/* Value 1 */}
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
              <h3 className="text-purple-400 font-bold mb-2">Strategic Sourcing</h3>
              <p className="text-slate-400">Expert handling of "Source-to-Pay" lifecycles for Aviation and Defense projects.</p>
            </div>

            {/* Value 2 */}
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
              <h3 className="text-emerald-400 font-bold mb-2">Cost Reduction</h3>
              <p className="text-slate-400">Consistently delivering 10-15% savings through volume consolidation and contract restructuring.</p>
            </div>

            {/* Value 3 */}
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2">Trusted Network</h3>
              <p className="text-slate-400">Established relationships with Tier-1 manufacturers including Honeywell, Cisco, and Bosch.</p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}