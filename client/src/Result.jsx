import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state?.result) {
        return (
            <main className="min-h-screen bg-[#00151D] flex flex-col items-center text-white p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold text-center">
                    No Prediction found
                </h1>
                <button
                    onClick={() => navigate("/")}
                    className="mt-5 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-[#00231C]"
                >
                    Upload an Image
                </button>
            </main>
        );
    }

    const { result, preview } = state;

    const Confidence =
        typeof result.Confidence === "number"
            ? Math.min(100, Math.max(0, result.Confidence * 100))
            : null;

    return (
        <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-emerald-400 mt-6 ms-1 sm:ms-3">
                    <Link to="/" className="inline-flex items-center text-sm sm:text-base">
                        <FiArrowLeft className="me-2" />
                        Scan Again
                    </Link>
                </div>

                <div className="mt-5 flex flex-col lg:flex-row gap-6 rounded-2xl border border-emerald-200/30 bg-emerald-300/10 p-4 sm:p-6 backdrop-blur-2xl">
                    <img
                        src={preview}
                        alt="Scanned Potato Leaf"
                        className="w-full lg:w-80 xl:w-[400px] h-64 sm:h-80 lg:h-[440px] rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                        <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-2 mt-1 lg:mt-4 w-fit rounded-full">
                            <p className="text-emerald-400 font-bold text-center inline-flex items-center text-xs sm:text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="me-2 shrink-0"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="me-2"
                                >
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                                DETECTION SUCCESSFULL
                            </p>
                        </div>

                        <div className="text-white mt-6 w-full">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold break-words">
                                {result.Class}
                            </h1>

                            <div className="mt-8 sm:mt-10 lg:mt-14 w-full">
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <span className="text-sm font-medium text-slate-300">
                                        Confidence Level
                                    </span>

                                    <span className="text-base sm:text-lg font-bold text-emerald-400">
                                        {Confidence !== null
                                            ? `${Confidence.toFixed(1)}%`
                                            : "N/A"}
                                    </span>
                                </div>

                                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 transition-all duration-1000"
                                        style={{
                                            width: `${Confidence ?? 0}%`,
                                        }}
                                    />
                                </div>

                                <div className="mt-2 flex justify-between text-xs text-slate-400">
                                    <span>Low</span>
                                    <span>Medium</span>
                                    <span>High</span>
                                </div>

                                {result.Class === "Earily Bright" && (
                                    <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-3 mt-8 sm:mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                        <p className="text-sm sm:text-base lg:text-lg">
                                            This leaf shows symptoms of Ealiry Bright.
                                            <br />
                                            You should take action soon to prevent further spread.
                                        </p>
                                    </div>
                                )}

                                {result.Class === "Late Bright" && (
                                    <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-3 mt-8 sm:mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                        <p className="text-sm sm:text-base lg:text-lg">
                                            This leaf shows symptoms of Late Bright.
                                            <br />
                                            You should take action soon to prevent further spread.
                                        </p>
                                    </div>
                                )}

                                {result.Class === "Healthy" && (
                                    <div className="bg-emerald-100/10 backdrop-blur-md px-4 py-3 mt-8 sm:mt-14 w-full flex rounded-xl border border-emerald-200/30">
                                        <p className="text-sm sm:text-base lg:text-lg">
                                            This leaf has no disease.
                                            <br />
                                            You should keep testing your crops to keep make it healthy.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {result.Class === "Earily Bright" && (
                    <div className="mt-5 rounded-2xl border border-emerald-200/30 bg-emerald-400/10 p-4 sm:p-6 backdrop-blur-2xl">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                            <div className="text-slate-100 bg-emerald-600 p-3 rounded-lg h-14 w-14 shrink-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-book-bookmark preview-icon"
                                >
                                    <path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2" />
                                    <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a2.5 2.5 0 010-5H20" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h1 className="text-slate-100 font-bold text-lg mb-3">
                                    Disease Information
                                </h1>
                                <p className="text-slate-100 font-light text-sm sm:text-base">
                                    Ealiry bright is fungist disease that affect potato leaves,
                                    <br className="hidden sm:block" />
                                    causing brown spots with concentric rings. it can reduce
                                    <br className="hidden sm:block" />
                                    yeild if not controlled early
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col md:flex-row justify-between gap-6 p-2 sm:p-4">
                            <div className="flex-1">
                                <h1 className="text-slate-100 font-bold text-lg mb-4">
                                    Symptoms
                                </h1>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Brown spots with concentric rings
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Yellowing of leaves
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Leaf drops in serve cases
                                    </span>
                                </p>
                            </div>

                            <div className="flex-1">
                                <h1 className="text-slate-100 font-bold text-lg mb-4">
                                    Prevention and Treatment
                                </h1>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Use disease-free seed potatoes
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Practice crop rotation
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Avoid overhead imigation
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Apply recommended fungicides
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-3 p-2 sm:p-3">
                            <button className="w-full sm:flex-1 cursor-pointer rounded-lg py-3 text-slate-100 inline-flex bg-emerald-400 justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-scan-eye preview-icon"
                                >
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                    <circle cx="12" cy="12" r="1" />
                                    <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                                </svg>
                                <span className="ms-3 sm:ms-5 font-bold">
                                    View More Details
                                </span>
                            </button>

                            <button
                                className="w-full sm:flex-1 cursor-pointer py-3 rounded-lg text-slate-100 inline-flex bg-emerald-100/10 backdrop-blur-md border border-emerald-200/30 justify-center items-center"
                                onClick={() => navigate("/")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-scan preview-icon"
                                >
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                </svg>
                                <span className="ms-3 sm:ms-5">
                                    Scan Another Image
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {result.Class === "Late Bright" && (
                    <div className="mt-5 rounded-2xl border border-emerald-200/30 bg-emerald-400/10 p-4 sm:p-6 backdrop-blur-2xl">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                            <div className="text-slate-100 bg-emerald-600 p-3 rounded-lg h-14 w-14 shrink-0 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-book-bookmark preview-icon"
                                >
                                    <path d="M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2" />
                                    <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a2.5 2.5 0 010-5H20" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <h1 className="text-slate-100 font-bold text-lg mb-3">
                                    Disease Information
                                </h1>
                                <p className="text-slate-100 font-light text-sm sm:text-base">
                                    Late blight of potato is a destructive plant disease
                                    <br className="hidden sm:block" />
                                    caused by the oomycete (water mold) Phytophthora infestans,
                                    <br className="hidden sm:block" />
                                    which affects potatoes, tomatoes and other members of the nightshade family.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col md:flex-row justify-between gap-6 p-2 sm:p-4">
                            <div className="flex-1">
                                <h1 className="text-slate-100 font-bold text-lg mb-4">
                                    Symptoms
                                </h1>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Water-soaked leaf lesions
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        White fungal-like fuzz
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Firm, reddish-brown tuber rot
                                    </span>
                                </p>
                            </div>

                            <div className="flex-1">
                                <h1 className="text-slate-100 font-bold text-lg mb-4">
                                    Prevention and Treatment
                                </h1>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Use Certified, Disease-Free Seed Tubers
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Practice Crop Rotation
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Optimize Spacing and Watering
                                    </span>
                                </p>
                                <p>
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 me-1 mb-1"></span>
                                    <span className="text-slate-100 font-light">
                                        Remove Volunteer Plants and Sanitation Debris
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between gap-3 p-2 sm:p-3">
                            <button className="w-full sm:flex-1 cursor-pointer rounded-lg py-3 text-slate-100 inline-flex bg-emerald-400 justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-scan-eye preview-icon"
                                >
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                    <circle cx="12" cy="12" r="1" />
                                    <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                                </svg>
                                <span className="ms-3 sm:ms-5 font-bold">
                                    View More Details
                                </span>
                            </button>

                            <button
                                className="w-full sm:flex-1 cursor-pointer py-3 rounded-lg text-slate-100 inline-flex bg-emerald-100/10 backdrop-blur-md border border-emerald-200/30 justify-center items-center"
                                onClick={() => navigate("/")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-scan preview-icon"
                                >
                                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                </svg>
                                <span className="ms-3 sm:ms-5">
                                    Scan Another Image
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Result;