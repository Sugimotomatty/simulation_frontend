import Auth from "./Auth";
import Brand from "./components/Brand";
import SelectedBrand from "./components/SelectedBrand";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/SelectedBrand" element={<SelectedBrand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
