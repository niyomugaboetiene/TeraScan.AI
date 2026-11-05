import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./Entry";
import Result from "./Result";

function App() {
  return (
      <BrowserRouter>
          <Routes>
               <Route path="/" element={<Entry />}/>
               <Route path="/result" element={<Result />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
