import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state.result) {
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
         <div className="max-w-6xl mx-auto">
            <div className="text-emerald-400 mt-6 ms-3">
               <Link className="inline-flex"><FiArrowLeft className="mt-1 me-2"/>Scan Again</Link>
            </div>
            <div className="border border-emerald-400 bg-emerald-400 backdrop-blur-2xl flex p-6 mt-5">
                <img src={preview} alt="" className="w-120 h-160 rounded-3xl object-cover"/>
            </div>
         </div>
        </div>
    )
}

export default Result;