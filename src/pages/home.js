import React from "react";
import HomePageVideo from "../components/home-page-video";
import AllVideos from "../components/all-videos/all-videos";
const Home = () => {
  return (
    <>
      <HomePageVideo
        url={process.env.REACT_APP_STREAM_LIVE_URL}
        poster="https://ibb.co/FbFVLPz"
      />
      <AllVideos />
    </>
  );
};
export default Home;
