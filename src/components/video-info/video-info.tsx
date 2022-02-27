import React, { ReactElement } from "react";
import { Video, Maybe } from "../../generated/graphql";
import HomePageVideo from "../home-page-video";
import { useGetVideoByIdQuery } from "../../generated/graphql";

import { useParams } from "react-router-dom";

interface Props {
  video?: Maybe<Video>;
}

export default function VideoInfo(props: Props): ReactElement {
  const { id } = useParams();
  console.log(id);

  const data = {
    video: {
      url: "",
      poster: "",
    },
  };

  // const { data, loading, error } = useGetVideoByIdQuery(id!);

  return (
    <div className="video-info">
      <HomePageVideo
        url={
          !!data?.video?.url
            ? data?.video?.url
            : process.env.REACT_APP_STREAM_LIVE_URL
        }
        poster={
          !!data?.video?.poster
            ? data?.video?.poster
            : "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=612x612&w=0&h=3GMtsYpW6jmRY9L47CwA-Ou0yYIc5BXRQZmcc81MT78="
        }
      />
    </div>
  );
}
