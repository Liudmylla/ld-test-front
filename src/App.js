import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Funzone from "./pages/funzone";
import Testimoniales from "./pages/testimoniales";
import Home from "./pages/home";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funzone" element={<Funzone />} />
        <Route path="/testimoniales" element={<Testimoniales />} />
      </Routes>
    </>
  );
};
export default App;
