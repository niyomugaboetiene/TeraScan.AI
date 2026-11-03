import SampleBg from "./assets/new_bg.png";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
                          <p className="mt-3 text-slate-100 text-xl">We combine computer vision and deep learning to analyze <br />
                          potato leaf images and detect disease with high accuracy</p>
                    </div>
                      <motion.div
                                 className="mt-5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4"
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
                     
                                   <div className="text-slate-800 mt-3">
                                     <h1 className="font-bold text-xl">1. Upload Image</h1>
                                     <p className="text-slate-400 mt-3">
                                       Select or drag and drop
                                       <br />
                                       a leaf image
                                     </p>
                                   </div>
                                 </div>
                     
                                 <div className="hidden md:flex items-center justify-center">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
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
                                       <path d="M12 18V5" />
                                       <path d="M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4" />
                                       <path d="M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294" />
                                       <path d="M17.996 5.125a4 4 0 012.526 5.77" />
                                       <path d="M18 18a4 4 0 002-7.465" />
                                       <path d="M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517" />
                                       <path d="M6 18a4 4 0 01-2-7.465" />
                                       <path d="M6.004 5.125a4 4 0 00-2.526 5.77" />
                                     </svg>
                                   </div>
                     
                                   <div className="text-slate-800 mt-3">
                                     <h1 className="font-bold text-xl">2. AI Analysis</h1>
                                     <p className="text-slate-400 mt-3">
                                       Our model processes
                                       <br />
                                       the image using deep learning
                                     </p>
                                   </div>
                                 </div>
                     
                                 <div className="hidden md:flex items-center justify-center">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
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
                                       <path d="M20 6 9 17l-5-5" />
                                     </svg>
                                   </div>
                     
                                   <div className="text-slate-800 mt-3">
                                     <h1 className="font-bold text-xl">3. Get Result</h1>
                                     <p className="text-slate-400 mt-3">
                                       See the disease name
                                       <br />
                                       Confidence score and advice
                                     </p>
                                   </div>
                                 </div> <div className="hidden md:flex items-center justify-center">
                                   <FiArrowRight className="text-4xl text-slate-400" />
                                 </div>
                     
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
                                       <path d="M20 6 9 17l-5-5" />
                                     </svg>
                                   </div>
                     
                                   <div className="text-slate-800 mt-3">
                                     <h1 className="font-bold text-xl">3. Get Result</h1>
                                     <p className="text-slate-400 mt-3">
                                       See the disease name
                                       <br />
                                       Confidence score and advice
                                     </p>
                                   </div>
                                 </div> 
                     </motion.div>
                </div>
             </div>
        </div>
    )

}

export default About