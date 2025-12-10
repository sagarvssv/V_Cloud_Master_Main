import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 pt-16 pb-10" >
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Company Info */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-white">VCloudMaster</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            We help businesses adopt, optimize, and scale cloud infrastructure 
            with expert solutions in DevOps, Cloud Migration, AI Automation, 
            Cybersecurity, and Managed Cloud Services.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Cloud Migration</li>
            <li className="hover:text-white cursor-pointer">DevOps & Automation</li>
            <li className="hover:text-white cursor-pointer">AI & ML Solutions</li>
            <li className="hover:text-white cursor-pointer">Disaster Recovery</li>
            <li className="hover:text-white cursor-pointer">Cloud Security</li>
            <li className="hover:text-white cursor-pointer">Managed Services</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Company</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Partners</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Cloud Calculator</li>
            <li className="hover:text-white cursor-pointer">Developer Tools</li>
          </ul>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <h3 className="text-xl font-semibold text-white">Subscribe to our Newsletter</h3>
        <p className="text-gray-400 mt-2">
          Stay updated with cloud trends, insights, and technology updates.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg flex items-center gap-2 text-white font-medium transition">
            Subscribe <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t border-slate-700 mt-14 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} VCloudMaster. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
