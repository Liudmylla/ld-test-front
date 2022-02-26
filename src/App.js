import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Funzone from "./pages/funzone";
import Testimoniales from "./pages/testimoniales";
import Home from "./pages/home";
import Video from "./pages/video";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funzone" element={<Funzone />} />
        <Route path="/testimoniales" element={<Testimoniales />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </>
  );
};
export default App;
