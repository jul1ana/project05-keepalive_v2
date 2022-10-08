import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { FirstNameContext } from "./components/context/FirtsName/FirstNameContext";
import { useState } from "react";

export const Router = () => {

  const [firstName, setFirstName] = useState<string>("");

  return (
    <FirstNameContext.Provider value={{firstName, setFirstName}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </FirstNameContext.Provider>
  );
}