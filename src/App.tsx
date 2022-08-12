import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Asct from "./components/pages/Asct";
import NotFound from "./components/pages/NotFound";
import { createContext } from "react";
import { AccountRepository } from "./api/rest/AccountRepository";
import { createDependencyRegistrar } from "./di/DependencyRegistrar";

/* create DI container */

// define DI container to register
type Dependencies = {
  accountRepo: AccountRepository;
};

// register Bean and define Context
const registrar = createDependencyRegistrar<Dependencies>();
registrar.register("accountRepo", new AccountRepository());
export const DiConteinerContext = createContext(
  createDependencyRegistrar<Dependencies>()
);

/* create parent component */
export const App = () => {
  return (
    <BrowserRouter>
      <DiConteinerContext.Provider value={registrar}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pp" element={<PrivacyPolicy />} />
          <Route path="/asct" element={<Asct />} />
          <Route path="/terms" element={<Asct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiConteinerContext.Provider>
    </BrowserRouter>
  );
};
