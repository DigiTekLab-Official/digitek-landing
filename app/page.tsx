import Link from "next/link";
import { Mail, Phone, ShieldCheck, Server, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-200 p-6 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl w-full space-y-10 text-center z-10">
        
        {/* Header / Logo */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            <span className="text-blue-500">Digitek</span> Lab Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide">
            Global Sourcing & Procurement Consulting
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-10 opacity-50"></div>

        {/* Main Card */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl animate-in fade-in zoom-in duration-1000 delay-150">
          <p className="text-lg md:text-2xl leading-relaxed text-slate-300 font-light">
            We specialize in strategic sourcing for <span className="text-blue-400 font-semibold">Security Systems</span>, <span className="text-emerald-400 font-semibold">IT Infrastructure</span>, and <span className="text-purple-400 font-semibold">MEP Projects</span> in the UAE and India.
          </p>
          
          {/* Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 transition-all">
              <ShieldCheck className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200">Security Systems</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 transition-all">
              <Server className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200">IT Infrastructure</span>
            </div>
            <div className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/60 transition-all">
              <Cpu className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200">MEP Sourcing</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          
          {/* Email Button */}
          <Link 
            href="mailto:ameer@digiteklab.com" 
            className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/25"
          >
            <Mail className="w-6 h-6" />
            <span>ameer@digiteklab.com</span>
          </Link>
          
          {/* Phone Button (Now Clickable!) */}
          <a 
            href="tel:+917708276542"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 rounded-full font-medium text-lg transition-all cursor-pointer"
          >
            <Phone className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span>+91-770-8276542</span>
          </a>

        </div>

        <div className="pt-16 text-sm text-slate-600">
          <p>© 2025 Digitek Lab Solutions. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}