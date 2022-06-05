import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './components/pages/Home'
import Company from "./components/pages/Company";
import Signin from "./components/pages/Signin";
import Login from "./components/pages/Login";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Asct from "./components/pages/Asct";
import NotFound from "./components/pages/NotFound";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
        <Route path="/asct" element={<Asct />} />
        <Route path="/terms" element={<Asct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
