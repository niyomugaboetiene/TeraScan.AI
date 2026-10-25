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
               <div className="mt-12 flex justify-center border-2 border-dashed rounded-2xl border-emerald-500 p-3">
                     
               </div>
          </div>
     </div>
  );
};

export default Prediction;