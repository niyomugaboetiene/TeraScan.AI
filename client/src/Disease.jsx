import { motion } from "framer-motion";

const Disease = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
            <div className="mt-12 mx-auto w-full max-w-7xl">
                    <h1 className="text-slate-100 text-4xl font-bold">Potato Diseases</h1>
                    <p className="mt-2 text-slate-100 text-2xl">Learn about common potato disease and how to manage them.</p>

                    <div className="flex space-x-12 mt-10">
                        <button className={`text-white font-bold py-3 px-24 bg-[#06131F] border-2 border-slate-800 text-lg rounded-lg transition-colors`}>Earily Bright</button>
                        <button>Late Bright</button>
                        <button>Healthy</button>
                    </div>
            </div>
        </div>
    )
}

export default Disease