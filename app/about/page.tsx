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
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just find suppliers. We build procurement strategies that save millions.
          </p>
        </div>

        {/* The "Authority" Section */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl space-y-6">
          <h2 className="text-2xl font-semibold text-white">Our Leadership</h2>
          <p className="text-slate-300 leading-relaxed">
            Founded by <strong>Ameer Muneer</strong>, a veteran Procurement Specialist with over 15 years of experience in the Middle East and India. 
          </p>
          <p className="text-slate-300 leading-relaxed">
            Previously serving as Procurement Manager for <strong>Atlas Telecom</strong>, Ameer managed a cumulative procurement volume of over <strong>AED 1.6 Billion</strong>, overseeing critical infrastructure tenders for airports, nuclear facilities, and government defense projects.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
            <h3 className="text-emerald-400 font-bold mb-2">Cost Efficiency</h3>
            <p className="text-sm text-slate-400">Proven track record of reducing material costs by 10-15% through strategic negotiation and bulk-buy structuring.</p>
          </div>
          <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
            <h3 className="text-blue-400 font-bold mb-2">Vendor Network</h3>
            <p className="text-sm text-slate-400">Direct access to "Preferred Tier" pricing from global giants like Honeywell, Cisco, Bosch, and Anixter.</p>
          </div>
        </div>

      </div>
    </main>
  );
}