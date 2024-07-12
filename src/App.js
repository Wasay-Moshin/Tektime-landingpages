import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Component/Layout/Base";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
