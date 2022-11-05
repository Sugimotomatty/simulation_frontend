import Auth from "./Auth";
import Brand from "./components/Brand";
import SelectedBrand from "./components/SelectedBrand";
import Simulation from "./components/Simulation";
import "./App.css";
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/SelectedBrand" element={<SelectedBrand />} />
          <Route path="/Simulation" element={<Simulation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
