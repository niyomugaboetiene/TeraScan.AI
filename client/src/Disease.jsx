import { motion } from "framer-motion";

const Disease = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
            <div className="mt-12 mx-auto w-full max-w-7xl">
                    <h1 className="text-slate-100 text-4xl font-bold">Potato Diseases</h1>
                    <p className="mt-2 text-slate-100 text-2xl">Learn about common potato disease and how to manage them.</p>

                    <div className="flex justify-between mt-4">
                        <button>Earily Bright</button>
                        <button>Late Bright</button>
                        <button>Healthy</button>
                    </div>
            </div>
        </div>
    )
}

export default Disease