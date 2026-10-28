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
                          <div className="mt-12 flex space-x-12 w-210">
                                 <div>
                                    <img src={Earily} alt="Earily Bright" className="w-90 h-120 rounded-3xl object-cover"/>
                                 </div>
                                 <div className="">
                                    <h1>Ealiry Bright</h1>
                                    <p>(Alternaria Solani)</p>

                                    <p>Ealiry Bright is a fungal disease that affects potato leaves <br />
                                       slams and tubers. it is more common in warm and hurrid conditions <br />
                                       and can cause significant yield loss if not managed ealiry
                                    </p>
                                 </div>
                          </div>
                    )}
            </div>
        </div>
    )
}

export default Disease