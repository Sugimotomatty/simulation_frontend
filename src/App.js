import Auth from "./login/Auth";
import Brand from "./components/Brand";
import SignUp  from "./login/Signup";
import SelectedBrand from "./components/SelectedBrand";
import Simulation from "./components/Simulation";
import "./App.css";
import { AuthProvider } from './context/AuthContext';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {


  return (
    <>
    <AuthProvider>

    
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Auth />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/SelectedBrand" element={<SelectedBrand />} />
          <Route path="/Simulation" element={<Simulation />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}