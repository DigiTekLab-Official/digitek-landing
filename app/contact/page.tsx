// app/contact/page.tsx
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
          <p className="text-slate-400 text-lg">
            Ready to optimize your procurement process? Let's discuss your upcoming tender requirements.
          </p>
          
          <div className="space-y-4 pt-4">
            <Link href="mailto:ameer@digiteklab.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg">info@digiteklab.com</span>
            </Link>

            <Link href="tel:+917708276542" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-lg">+91-638-3255181</span>
            </Link>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg">Chennai, India & Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Right Side: Simple Card */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl">
           <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
           <div className="space-y-3 text-slate-400">
             <div className="flex justify-between">
               <span>Monday - Friday</span>
               <span className="text-slate-200">9:00 AM - 6:00 PM</span>
             </div>
             <div className="flex justify-between">
               <span>Saturday</span>
               <span className="text-slate-200">10:00 AM - 2:00 PM</span>
             </div>
             <div className="flex justify-between">
               <span>Sunday</span>
               <span className="text-red-400">Closed</span>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}