import React from "react";
import HomePageVideo from "../components/home-page-video";
import AllVideos from "../components/all-videos/all-videos";
const Home = () => {
  return (
    <>
      <HomePageVideo
        url={
          "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        }
        poster="https://ibb.co/FbFVLPz"
      />
      <AllVideos />
    </>
  );
};
export default Home;
