import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App'
import Company from "./routes/Company";
import Signin from "./routes/Signin";
import Login from "./routes/Login";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Asct from "./routes/Asct";
import NotFound from "./routes/NotFound";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company" element={<Company />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pp" element={<PrivacyPolicy />} />
        <Route path="/asct" element={<Asct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
