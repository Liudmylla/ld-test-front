import ReactHlsPlayer from "react-hls-player";
const HomePageVideo = ({ url, poster }) => {
  return (
    <ReactHlsPlayer
      src={url}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
      poster={poster}
    />
  );
};
export default HomePageVideo;
