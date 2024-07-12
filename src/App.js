import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Component/Layout/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Privacypolicy from "./Pages/Privacypolicy";
import Termsandconditions from "./Pages/Termsandconditions";
import Contactus from "./Pages/Contactus";
import Planandpricing from "./Pages/Planandpricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/privacy-policy" element={<Privacypolicy/>}/>
            <Route path="/terms&conditions" element={<Termsandconditions/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/pricing" element={<Planandpricing/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
