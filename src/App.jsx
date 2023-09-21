import "./App.css";
import Landing from "./pages/landing";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Landing />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
