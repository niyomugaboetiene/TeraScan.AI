import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaHeart  } from "react-icons/fa"
import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpeg";
const Footer = () => {

    return (
        <div className="bg-[#0B1F2A] top-0 bottom-0 left-0 right-0 rounded-t-3xl">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="mt-12">
                    <div className="flex space-x-4">
                        <img src={Logo} alt="Logo" className="h-24 w-24 rounded-full"/>
                        <div className="mt-3">
                           <h1 className="text-emerald-400 text-4xl"><span className="font-bold">TERASCAN</span> AI</h1>
                           <p className="text-emerald-300 text-xl">Scan smart, keep healthy</p>
                       </div>
                    </div>
                     <div className="mt-2 w-100">
                        <p className="text-slate-100 text-lg">Using AI to prediction potato disease to help farmers in Rwanda and beyond</p>
                     </div>
                </div>

                <div className="flex space-x-36 mt-12">
                    <div className="grid grid-row-5">
                          <h1 className="text-slate-100 text-xl font-bold">Quick Links</h1>
                          <Link className="text-slate-100 hover:underline">Home</Link>
                          <Link className="text-slate-100 hover:underline">Scanner</Link>
                          <Link className="text-slate-100 hover:underline">Disease</Link>
                          <Link className="text-slate-100 hover:underline">About</Link>
                    </div>
                    
                    <div className="grid grid-row-4">
                          <h1 className="text-slate-100 text-xl font-bold">Resources</h1>
                          <Link className="text-slate-100 hover:underline">How It Works</Link>
                          <Link className="text-slate-100 hover:underline">FAQ</Link>
                          <Link className="text-slate-100 hover:underline">About</Link>
                    </div>
                    
                    <div className="grid grid-row-3">
                          <h1 className="text-slate-100 text-xl font-bold">Contact Us</h1>
                          <a className="text-slate-100 hover:underline" href="mailto:niyomugaboetiene53@gmail.com" rel="noopener noreferer" target="_blank">niyomugaboetiene53@gmail.com</a>
                          <p className="text-slate-100">Bugesera Rwanda</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex space-x-6 mt-4">
                   <a href="" className="text-4xl text-red-600"><FaYoutube /></a>
                   <a href="" className="text-4xl text-slate-100"><FaGithub /></a>
                   <a href="" className="text-4xl text-blue-500"><FaLinkedin /></a>
            </div>
            <div className="max-w-7xl mx-auto">
                   <hr className="mt-4 h-0.5 border-0 bg-slate-600" />
                 
                 <div className="flex justify-between mt-3">
                      <p className="text-slate-100 text-xl">&copy; 2026 TeraScan AI. All rights reserved.</p>
                      <p className="inline-flex text-slate-100 text-xl">Made with <FaHeart className="text-red-500 mt-1.5"/> for Farmers</p>
                 </div>
                 <p className="text-center mt-3 text-slate-100">A Project of <a href="https://github.com/niyomugaboetiene" rel="noopener noreferer" target="_blank" className="hover:text-slate-300 hover:underline transition-colors">Niyomugabo Etiene</a></p>
            </div>
        </div>
    )
}

export default Footer