// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors">
          Digitek <span className="text-blue-500">Lab</span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

      </div>
    </nav>
  );
}