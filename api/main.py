from fastapi import FastAPI, File, UploadFile, Response
import uvicorn
from PIL import Image
from io import BytesIO
import numpy as np
import tensorflow as tf
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
     CORSMiddleware,
     allow_origins=[
          "http://localhost:5173",
          "http://127.0.0.1:5173"
     ],
     allow_headers=["*"],
     allow_methods=["*"],
     allow_credentials=True
)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "model", "1.keras")
MODEL = tf.keras.models.load_model(MODEL_PATH)
CLASS_NAMES = ["Earily Bright", "Late Bright", "Healthy"]  
@app.get('/ping')
async def ping():
    return "I'm working keep go on!!" # just to make sure our server is running

# read file from disk and convert it into np array
def read_file_as_image(data) -> np.ndarray:
     image = Image.open(BytesIO(data)).convert("RGB")
     image = np.array(image)
     return image

@app.post("/predict")
async def predict(
    #  file in variablename, UploadFile is datatype, and File class is default value which allows to receive file
     file: UploadFile = File(...)
):
     image = read_file_as_image (await file.read())
     image_batch = np.expand_dims(image, axis=0) # add image to batches
     prediction = MODEL.predict(image_batch, verbose=0)
     predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
     confidence = float(np.max(prediction[0]))
     return {
          "Class": predicted_class,
          "Confidence": confidence
     }
     # return prediction.tolist()
     

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)