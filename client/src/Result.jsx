import { useLocation, useNavigate } from "react-router-dom";

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
}