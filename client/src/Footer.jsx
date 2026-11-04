
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F2A] rounded-t-3xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">

            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="TeraScan AI Logo"
                className="h-20 w-20 rounded-full object-cover border-2 border-emerald-400/40"
              />

              <div>
                <h1 className="text-emerald-400 text-3xl font-bold">
                  TERASCAN <span className="font-normal">AI</span>
                </h1>

                <p className="text-emerald-300 text-sm mt-1">
                  Scan smart, keep healthy
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-7 mt-6 max-w-sm">
              Using Artificial Intelligence to predict potato diseases
              and help farmers in Rwanda and beyond protect their crops.
            </p>

          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-6">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4">
              <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Home
              </Link>

              <Link to="/scanner" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Scanner
              </Link>

              <Link to="/disease" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Diseases
              </Link>

              <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg font-bold mb-6">
              Resources
            </h2>

            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-slate-400 hover:text-emerald-400 transition-colors">
                How It Works
              </a>

              <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors">
                FAQ
              </a>

              <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                About TeraScan
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg font-bold mb-6">
              Contact Us
            </h2>

            <div className="flex flex-col gap-5">

              <a
                href="mailto:niyomugaboetiene53@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors break-all"
              >
                <FaEnvelope className="text-emerald-400 shrink-0" />
                <span>niyomugaboetiene53@gmail.com</span>
              </a>

              <p className="flex items-center gap-3 text-slate-400">
                <FaMapMarkerAlt className="text-emerald-400 shrink-0" />
                Bugesera, Rwanda
              </p>

            </div>
          </div>

        </div>

        <div className="flex items-center gap-4 mt-12">

          <a
            href="https://youtube.com/@codeexplorerrwanda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <FaYoutube className="text-xl" />
          </a>

          <a
            href="https://github.com/niyomugaboetiene"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>

        </div>

        <hr className="mt-10 border-0 h-px bg-slate-700" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">

          <p className="text-slate-400 text-sm text-center">
            © 2026 TeraScan AI. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-slate-400 text-sm">
            Made with
            <FaHeart className="text-red-500" />
            <span>for Farmers</span>
          </p>

        </div>

        {/* Developer Credit */}
        <p className="text-center text-slate-500 text-sm mt-6">
          A Project of{" "}
          <a
            href="https://github.com/niyomugaboetiene"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 hover:underline transition-colors font-semibold"
          >
            Niyomugabo Etiene
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
