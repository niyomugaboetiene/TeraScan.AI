import { motion } from "framer-motion";
import { useState } from "react";
import Earily from "./assets/ealiry.jpeg"
import healithy from "./assets/healithy.jpg"
import Late from "./assets/Late_bright.jpg"

const Disease = () => {
    const [MenuToOpen, setMenuToOpen] = useState(1);

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
            <div className="mt-12 mx-auto w-full max-w-7xl">
                    <h1 className="text-slate-100 text-4xl font-bold">Potato Diseases</h1>
                    <p className="mt-2 text-slate-100 text-2xl">Learn about common potato disease and how to manage them.</p>

                    <div className="flex space-x-12 mt-10">
                        <button className={`${MenuToOpen === 1 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg rounded-lg transition-colors`}>Earily Bright</button>
                        <button className={`${MenuToOpen === 2 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg rounded-lg transition-colors`}>Late Bright</button>
                        <button className={`${MenuToOpen === 3 ? "bg-emerald-500" : ""} text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg rounded-lg transition-colors`}>Healthy</button>
                    </div>

                    {MenuToOpen === 1 && (
                          <div className="mt-12 flex space-x-12 ">
                                 <div>
                                    <img src={Earily} alt="Earily Bright" className="w-90 h-130 rounded-3xl object-cover"/>
                                 </div>
                                 <div>
                                    <h1 className="text-3xl text-slate-100 font-bold">Ealiry Bright</h1>
                                    <p className="mt-2 text-slate-100 text-xl">(Alternaria Solani)</p>

                                    <p className="text-slate-100 text-xl mt-12">Ealiry Bright is a fungal disease that affects potato leaves <br />
                                       slams and tubers. it is more common in warm and hurrid <br />
                                      conditions and can cause significant yield loss if not <br /> managed ealiry
                                    </p>

                                  <div className="mt-12">
                                       <h1 className="text-slate-100 font-bold text-3xl">Key Symptoms</h1>
                                       <p className="text-slate-100">
                                         <span className="py-0.5 px-0.5 inline-block h-5 w-5 rounded-full bg-emerald-400 me-1 mb-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                                        </span> <span>Brown spots with concentric rings</span></p>
                                       <p className="text-slate-100"><span className="py-0.5 px-0.5  inline-block h-5 w-5 rounded-full bg-emerald-400 me-1 mb-1">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                                        </span> <span>Yellowing of older leaves</span></p>
                                       <p className="text-slate-100"><span className="py-0.5 px-0.5  inline-block h-5 w-5 rounded-full bg-emerald-400 me-1 mb-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                                        </span> <span>Leaf drops in severe cases</span></p>
                                       <p className="text-slate-100"><span className="py-0.5 px-0.5 inline-block h-5 w-5 rounded-full bg-emerald-400 me-1 mb-1">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>
                                        </span> <span>Dark lessions on stems (sometimes)</span></p>
                                 </div>
                                 </div>

                          </div>
                    )}
            </div>
        </div>
    )
}

export default Disease