import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Component/Layout/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Privacypolicy from "./Pages/Privacypolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/privacy-policy" element={<Privacypolicy/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
