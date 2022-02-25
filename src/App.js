import React, { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Funzone from "./pages/funzone";
import Testimoniales from "./pages/testimoniales";
import AllVideos from "./components/all-videos/all-videos";
import HomePageVideo from "./components/home-page-video";
import Home from "./pages/home";
const App = () => {
  return (
    <>
      <NavBar />
      <HomePageVideo
        url={
          "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        }
        poster="https://ibb.co/FbFVLPz"
      />
      <AllVideos />
      <Routes>
        <Route path="/funzone" component={Funzone} />
        <Route path="/testimoniales" component={Testimoniales} />
        <Route path="/home" component={Home} />
      </Routes>
    </>
  );
};
export default App;
