import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state?.result) {
        return (
            <main className="min-h-screen bg-[#00151D] flex flex-col items-center text-white p-6">
                <h1 className="text-2xl font-bold">
                    No Prediction found
                </h1>
                <button onClick={() => navigate('/')} className="mt-5 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-[#00231C]">
                    Upload an Image
                </button>
            </main>
        )
    }

    const { result, preview } = state;
    
    const Confidence = typeof result.Confidence === "number" ? Math.min(100, Math.max(0, result.Confidence * 100)) : null;

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
         <div className="max-w-4xl mx-auto">
            <div className="text-emerald-400 mt-6 ms-3">
               <Link className="inline-flex"><FiArrowLeft className="mt-1 me-2"/>Scan Again</Link>
            </div>
            <div className="mt-5 flex rounded-2xl border border-emerald-200/30 bg-emerald-300/10 p-6 backdrop-blur-2xl">
                <img src={preview} alt="" className="w-100 h-110 rounded-3xl object-cover"/>
                <div>
                    <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-1 mt-4 w-fit rounded-full ms-5">
                        <p className="text-emerald-400 font-bold text-center inline-flex mt-1">
                             <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check preview-icon"><path d="M20 6 9 17l-5-5"/></svg>DETECTION SUCCESSFULL
                        </p>
                    </div>

                    <div className="text-white mt-6 ms-5 w-400">
                        <h1 className="text-6xl font-bold">{result.Class}</h1>
                   
                            <div className="mt-14 w-110">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-300">
                                Confidence Level
                                </span>

                                <span className="text-lg font-bold text-emerald-400">
                                {(result.Confidence * 100).toFixed(1)}%
                                </span>
                            </div>

                            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
                                <div
                                className="h-full rounded-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 transition-all duration-1000"
                                style={{
                                    width: `${Math.min(100, Math.max(0, result.Confidence * 100))}%`,
                                }}
                                />
                            </div>

                            <div className="mt-2 flex justify-between text-xs text-slate-400">
                                <span>Low</span>
                                <span>Medium</span>
                                <span>High</span>
                            </div>
                           {result.Class === "Earily Bright" && (
                                <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-1 mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                       <p className="text-lg">This leaf shows symptoms of Ealiry Bright. <br />You should take action soon to prevent further spread.</p>
                               </div> 
                            )}
                            
                            {result.Class === "Late Bright" && (
                                <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-1 mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                       <p className="text-lg">This leaf shows symptoms of Late Bright. <br />You should take action soon to prevent further spread.</p>
                               </div> 
                            )}
                            
                            {result.Class === "Healthy" && (
                                <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-1 mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                       <p className="text-lg">This leaf has no disease. <br />You should keep testing your crops to keep make it healthy.</p>
                               </div> 
                            )}
                        </div>
                     </div>
                </div>
            </div>

            {result.Class === "Earily Bright" && (
                <div className="mt-5 rounded-2xl border border-emerald-200/30 bg-emerald-400/10 p-6 backdrop-blur-2xl">
                    <div className="flex space-x-5">
                        <div className="text-slate-100 bg-emerald-600 p-3 py-3 rounded-lg h-14">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-bookmark preview-icon"><path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2"/><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20"/></svg>
                        </div>
                        <div>
                            <h1 className="text-slate-100 font-bold text-lg mb-3">Disease Information</h1>
                            <p className="text-slate-100 font-light">Ealiry bright is fungist disease that affect potato leaves, 
                                <br /> causing brown spots with concentric rings. it can reduce <br />
                                yeild if not controlled early
                                </p>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between">
                         <div>
                            <h1 className="text-slate-100 font-bold text-lg">Symptoms</h1>
                            <p><span className="text-emerald-400">.</span> <span className="text-slate-100 ">Brown spots with concentric rings</span></p>
                            <p><span>.</span> <span>Yellowing of leaves</span></p>
                            <p><span>.</span> <span>Leaf drops in serve cases</span></p>
                         </div>

                         <div>
                            <h1>Prevention and Treatment</h1>
                                 <p><span>.</span> <span>Use disease-free seed potatoes</span></p>
                                 <p><span>.</span> <span>Practice crop rotation</span></p>
                                 <p><span>.</span> <span>Avoid overhead imigation</span></p>
                                 <p><span>.</span> <span>Apply recommended fungicides</span></p>
                         </div>
                    </div>
                </div>
            )}
         </div>
        </div>
    )
}

export default Result;