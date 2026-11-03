import SampleBg from "./assets/new_bg.png";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import{ FaReact, FaFlask } from "react-icons/fa";
import {SiTailwindcss, SiTensorflow } from "react-icons/si"
const About = () => {

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
             <div className="w-full max-w-6xl mx-auto">
                <div className="flex space-x-3">
                    <div>
                       <div className="absolute mt-52">
                            <h1 className="text-5xl font-bold text-slate-100">About TeraScan AI</h1>
                            <h1 className="mt-8 text-2xl text-slate-100 font-bold">Smart technology for healthier potato crops.</h1>
                            <p className="mt-8 text-2xl text-slate-100">TeraScan AI is an AI-powered web application designed to help <br />
                            farmers detect potato disease early. Our mission is to use <br />
                            technology to improve crop health, increase productivity, <br />
                            and support sustainable agricultural in Rwanda and beyond
                            </p>
                             <button className="bg-green-400 py-4 px-6 mt-8 rounded-lg text-slate-100 font-bold cursor-pointer hover:bg-green-500 transition-colors inline-flex">
                                <span className="me-2">Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right preview-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </button>
                       </div>
                    </div>
                    <div className="ms-92">
                        <img src={SampleBg} alt="Bg" />
                    </div>
                </div>

                <div className="mt-12">
                     <div>
                          <h1 className="text-slate-100 text-4xl font-bold">How It Works</h1>
                          <p className="mt-6 text-slate-100 text-xl">We combine computer vision and deep learning to analyze <br />
                          potato leaf images and detect disease with high accuracy</p>
                    </div>
                      <motion.div
                                 className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
                                //  initial={{ opacity: 0, y: 20 }}
                                //  whileInView={{ opacity: 1, y: 0 }}
                                //  viewport={{ once: false, amount: 0.3 }}
                                //  transition={{ duration: 1, ease: "easeInOut" }}
                               >
                                 <div className="flex flex-col items-center text-center">
                                   <div className="bg-emerald-500 rounded-full flex items-center justify-center p-7 text-emerald-300">
                                     <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="40"
                                       height="40"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="3"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                     >
                                       <path d="M12 13v8" />
                                       <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                       <path d="m8 17 4-4 4 4" />
                                     </svg>
                                   </div>
                     
                                   <div className="text-slate-100 mt-3">
                                     <h1 className="font-bold text-xl">Image Input</h1>
                                     <p className="text-slate-100 mt-3">
                                       Upload a leaf image
                                     </p>
                                   </div>
                                 </div>
                     
                                 <div className="hidden md:flex items-center justify-center mb-16">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
                                 <div className="flex flex-col items-center text-center">
                                   <div className="bg-emerald-500 rounded-full flex items-center justify-center p-7 text-emerald-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search preview-icon"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg>
                                   </div>
                     
                                   <div className="text-slate-100 mt-3">
                                     <h1 className="font-bold text-xl">Preprocessing</h1>
                                     <p className="text-slate-100 mt-3">
                                      Clean and prepare
                                       <br />
                                       image data
                                     </p>
                                   </div>
                                 </div>
                     
                                 <div className="hidden md:flex items-center justify-center mb-16">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
                                 <div className="flex flex-col items-center text-center">
                                   <div className="bg-emerald-500 rounded-full flex items-center justify-center p-7 text-emerald-300">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-cog preview-icon"><path d="m10.852 14.772-.383.923"/><path d="m10.852 9.228-.383-.923"/><path d="m13.148 14.772.382.924"/><path d="m13.53 8.305-.382.923"/><path d="m14.772 10.852.923-.383"/><path d="m14.772 13.148.923.383"/><path d="M17.997 5.125a4 4 0 012.526 5.77"/><path d="M18 18a4 4 0 002-7.464"/><path d="M4.033 17.483A4 4 0 0011.46 20c.184-.31.896-.31 1.076 0a4 4 0 007.43-2.517"/><path d="M6 18a4 4 0 01-2-7.464"/><path d="M6.002 5.125a4 4 0 00-2.525 5.77"/><path d="M6.293 6.294a3 3 0 01-.287-1.098l-.004-.07a3 3 0 015.968-.543c.05.02.057.01.059 0a3 3 0 015.968.542l-.004.071a3 3 0 01-.287 1.098"/><path d="m9.228 10.852-.923-.383"/><path d="m9.228 13.148-.923.383"/><circle cx="12" cy="12" r="3"/></svg>
                                   </div>
                     
                                   <div className="text-slate-100 mt-3">
                                     <h1 className="font-bold text-xl">AI Model</h1>
                                     <p className="text-slate-100 mt-3">
                                       Analyze with
                                       <br />
                                       trained model
                                     </p>
                                   </div>
                                 </div> <div className="hidden md:flex items-center justify-center mb-16">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
                                 <div className="flex flex-col items-center text-center">
                                   <div className="bg-emerald-500 rounded-full flex items-center justify-center p-7 text-emerald-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check preview-icon"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                   </div>
                     
                                   <div className="text-slate-100 mt-3">
                                     <h1 className="font-bold text-xl">Result</h1>
                                     <p className="text-slate-100 mt-3">
                                       Get disease name
                                       <br />
                                       and confidence
                                     </p>
                                   </div>
                                 </div> 
                     </motion.div>
                </div>
                 <hr className="mt-12 h-0.5 border-0 bg-slate-600" />
                 <div className="mt-12">
                        <h1 className="text-slate-100 text-4xl font-bold">Technology Used</h1>
                        <div>

                        </div>
                 </div>
            </div>
        </div>
    )

}

export default About