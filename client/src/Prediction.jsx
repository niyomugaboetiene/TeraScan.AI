import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Prediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setResult(null); 
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const Prediction = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      navigate(
        "/result",{
        state: {
        result: response.data,
        preview: preview
      }
    })
    } catch (err) {
      console.error(err);
      alert("Error connecting to the ML model. Please check your backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
     <div className="relative w-full min-h-screen bg-[#06131F] overflow-hidden">
          <div className="mx-auto w-full max-w-7xl">
               <div className="mt-12">
                 <h1 className="text-center text-white font-bold text-6xl">Scan your Potato Leaf</h1>
                 <p className="text-center text-white mt-6 text-2xl">Upload  a clear image of a potato leaf to detect its diseases <br />using our AI model.</p>
               </div>
               <div className="mt-12 border-2 border-dashed rounded-2xl border-emerald-500 py-10 p-3 mx-auto max-w-3xl">
                    <div className="text-white flex justify-center mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload preview-icon"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>        
                    </div>
                    <div className="mt-4">
                        <p className="text-center text-slate-100 text-xl">Drag and drop your image here</p>
                        <p className="text-center text-slate-100 text-xl">or</p>
                    </div>
                          
                    <div className="mt-6 flex w-1/4 mx-auto flex-row items-center justify-center gap-3  rounded-2xl bg-emerald-500 py-4 text-slate-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                        <path d="M12 12v6" />
                        <path d="m15 15-3-3-3 3" />
                      </svg>

                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer font-semibold"
                      >
                        Browse File
                      </label>

                      <input
                        id="file-upload"
                        type="file"
                        accept="image/jpeg, image/png, image/jpg"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="text-center text-slate-100 mt-8">
                      <p>Supported formats: JPG, JPEG, PNG (Max: 5MB)</p>
                    </div>
               </div>

              {preview && image && (
                <>
                <div className="mt-12 mx-auto flex max-w-3xl items-center gap-5 rounded-xl border border-slate-700 bg-[#062B36] p-4">

                  <img
                    src={preview}
                    alt="Selected file preview"
                    className="h-24 w-24 shrink-0 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h1 className="mb-2 text-lg font-bold text-white">
                      Image Preview
                    </h1>

                    <p className="truncate text-sm text-slate-200">
                      {image.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {(image.size / 1024).toFixed(2)} KB
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setPreview("");
                    }}
                    className="shrink-0 rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="bg-emerald-400 mt-12 mx-auto max-w-3xl flex py-5 justify-center space-x-4 text-slate-100 font-bold rounded-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-line preview-icon"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>
                    <button onClick={Prediction} className="cursor-pointer">
                        Analyze Image
                    </button>
              </div>
              </>
              )}
          </div>
     </div>
  );
};

export default Prediction;