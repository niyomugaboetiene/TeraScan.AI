import { motion } from "framer-motion";
import { useState } from "react";
import Earily from "./assets/ealiry.jpeg"
import healithy from "./assets/healithy.jpg"
import Late from "./assets/Late_bright.jpg"

const Disease = () => {
    const [MenuToOpen, setMenuToOpen] = useState(1);

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
            <motion.div
              className="mt-12 mx-auto w-full max-w-7xl"
            >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeInOut"}}
                        className="text-slate-100 text-4xl font-bold"
                        >Potato Diseases</motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeInOut"}}                    
                       className="mt-2 text-slate-100 text-2xl">Learn about common potato disease and how to manage them.</motion.p>

                    <motion.div 
                    className="flex space-x-12 mt-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeInOut"}}
                    >
                        <button onClick={() => setMenuToOpen(1)} className={`${MenuToOpen === 1 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg cursor-pointer rounded-lg transition-colors`}>Earily Bright</button>
                        <button onClick={() => setMenuToOpen(2)} className={`${MenuToOpen === 2 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg cursor-pointer rounded-lg transition-colors`}>Late Bright</button>
                        <button onClick={() => setMenuToOpen(3)} className={`${MenuToOpen === 3 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg cursor-pointer rounded-lg transition-colors`}>Healthy</button>
                    </motion.div>

                    {MenuToOpen === 2 && (
                        <>
                          <div className="mt-12 flex space-x-12 ">
                                 <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <img src={Earily} alt="Earily Bright" className="w-90 h-130 rounded-3xl object-cover"/>
                                 </motion.div>
                                 <motion.div 
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <h1 className="text-3xl text-slate-100 font-bold">Late Bright</h1>
                                    <p className="mt-2 text-slate-100 text-xl">(Phytophthora infestand)</p>

                                    <p className="text-slate-100 mt-12">Late Blight is disease that affects potato leaves, stems, and tubers.<br />
                                       It causes large, irregular, dark brown or black lesions on leaves, <br /> often surrounded by pale green or yellow areas.
                                      conditions and<br /> can cause significant yield loss if not managed ealiry
                                    </p>


                                    <div className="mt-12">
                                    <h1 className="text-slate-100 font-bold text-2xl mb-4">
                                        Key Symptoms
                                    </h1>

                                    <p className="text-slate-100 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Irregular dark brown or black spots on leaves</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>White mold-like growth on leaf undersides</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Yellowing, wilting, and dying leaves</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Dark lesions on stems and reddish-brown rot in tubers</span>
                                    </p>
                                    </div>
                                 </motion.div>
                          </div>

                          <motion.div className="mt-12"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 2, ease: "easeInOut"}}
                          >
                              <h1 className="text-3xl text-slate-100 font-bold mb-6">Prevention Tips</h1>
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Use Certified, disease-free seed potatoes</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center ">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Maintain proper plant spacing for good air circulation</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Ensure proper spacing  and good air curculation</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Avoid overhead irrigation</span>
                              </p>
                          </motion.div>
                          <motion.div 
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false, amount: 0.3 }}
                             transition={{ duration: 2, ease: "easeInOut"}}
                             className="bg-emerald-100/10 backdrop-blur-md p-12 mt-14 w-fit flex space-x-6 rounded-xl border border-emerald-200/30">
                                <div className="text-slate-100 bg-emerald-500/30 backdrop-blur-md p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock preview-icon"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl text-slate-100 font-bold">Remember: </h1>
                                    <p className="mt-3 x` text-slate-100">Always concult local agricultural export for the best treatment options in your area.</p>
                                </div>
                          </motion.div> 
                       </>
                    )}

                    {MenuToOpen === 1 && (
                        <>
                          <div className="mt-12 flex space-x-12 ">
                                 <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <img src={Earily} alt="Earily Bright" className="w-90 h-130 rounded-3xl object-cover"/>
                                 </motion.div>
                                 <motion.div 
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <h1 className="text-3xl text-slate-100 font-bold">Ealiry Bright</h1>
                                    <p className="mt-2 text-slate-100 text-xl">(Alternaria Solani)</p>

                                    <p className="text-slate-100 mt-12">Ealiry Bright is a fungal disease that affects potato leaves <br />
                                       slams and tubers. it is more common in warm and hurrid <br />
                                      conditions and can cause significant yield loss if not <br /> managed ealiry
                                    </p>


                                    <div className="mt-12">
                                    <h1 className="text-slate-100 font-bold text-2xl mb-4">
                                        Key Symptoms
                                    </h1>

                                    <p className="text-slate-100 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Brown spots with concentric rings</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Yellowing of older leaves</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Leaf drop in severe cases</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Dark lesions on stems (sometimes)</span>
                                    </p>
                                    </div>
                                 </motion.div>
                          </div>

                          <motion.div className="mt-12"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 2, ease: "easeInOut"}}
                          >
                              <h1 className="text-3xl text-slate-100 font-bold mb-6">Prevention Tips</h1>
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Use Certified, disease-free seed potatoes</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center ">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Rotate crops (avoid planting potatoes in the same field)</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Ensure proper spacing  and good air curculation</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Avoid overhead irrigation</span>
                              </p>
                          </motion.div>
                          <motion.div 
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false, amount: 0.3 }}
                             transition={{ duration: 2, ease: "easeInOut"}}
                             className="bg-emerald-100/10 backdrop-blur-md p-12 mt-14 w-fit flex space-x-6 rounded-xl border border-emerald-200/30">
                                <div className="text-slate-100 bg-emerald-500/30 backdrop-blur-md p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock preview-icon"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl text-slate-100 font-bold">Remember: </h1>
                                    <p className="mt-3 x` text-slate-100">Always concult local agricultural export for the best treatment options in your area.</p>
                                </div>
                          </motion.div> 
                       </>
                    )}

                    {MenuToOpen === 3 && (
                        <>
                          <div className="mt-12 flex space-x-12 ">
                                 <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <img src={Earily} alt="Earily Bright" className="w-90 h-130 rounded-3xl object-cover"/>
                                 </motion.div>
                                 <motion.div 
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 2, ease: "easeInOut"}}
                                 >
                                    <h1 className="text-3xl text-slate-100 font-bold">Ealiry Bright</h1>
                                    <p className="mt-2 text-slate-100 text-xl">(Alternaria Solani)</p>

                                    <p className="text-slate-100 mt-12">Ealiry Bright is a fungal disease that affects potato leaves <br />
                                       slams and tubers. it is more common in warm and hurrid <br />
                                      conditions and can cause significant yield loss if not <br /> managed ealiry
                                    </p>


                                    <div className="mt-12">
                                    <h1 className="text-slate-100 font-bold text-2xl mb-4">
                                        Key Symptoms
                                    </h1>

                                    <p className="text-slate-100 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Brown spots with concentric rings</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Yellowing of older leaves</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Leaf drop in severe cases</span>
                                    </p>

                                    <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-white"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        </span>
                                        <span>Dark lesions on stems (sometimes)</span>
                                    </p>
                                    </div>
                                 </motion.div>
                          </div>

                          <motion.div className="mt-12"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 2, ease: "easeInOut"}}
                          >
                              <h1 className="text-3xl text-slate-100 font-bold mb-6">Prevention Tips</h1>
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Use Certified, disease-free seed potatoes</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center ">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Rotate crops (avoid planting potatoes in the same field)</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Ensure proper spacing  and good air curculation</span>
                              </p>
                              
                              <p className="text-slate-100 mt-2 flex items-center">
                                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check preview-icon"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                                        </span>
                                        <span className="">Avoid overhead irrigation</span>
                              </p>
                          </motion.div>
                          <motion.div 
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false, amount: 0.3 }}
                             transition={{ duration: 2, ease: "easeInOut"}}
                             className="bg-emerald-100/10 backdrop-blur-md p-12 mt-14 w-fit flex space-x-6 rounded-xl border border-emerald-200/30">
                                <div className="text-slate-100 bg-emerald-500/30 backdrop-blur-md p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock preview-icon"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl text-slate-100 font-bold">Remember: </h1>
                                    <p className="mt-3 x` text-slate-100">Always concult local agricultural export for the best treatment options in your area.</p>
                                </div>
                          </motion.div> 
                       </>
                    )}
            </motion.div>
        </div>
    )
}

export default Disease