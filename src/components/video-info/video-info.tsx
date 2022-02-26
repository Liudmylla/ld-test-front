import React, { ReactElement } from "react";
import { Video, Maybe } from "../../generated/graphql";
import { Card, CardMedia } from "@material-ui/core";
import HomePageVideo from "../home-page-video";
import { useGetVideoByIdQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";
interface Props {
  video?: Maybe<Video>;
}

export default function VideoInfo(props: Props): ReactElement {
  // const { data, loading, error } = useGetVideoByIdQuery(props.video?.id);
  return (
    <div className="video-info">
      <Card>
        <Link to={`/video/${props.video?.id}`}>
          <CardMedia
            component="img"
            height="194"
            image={props.video?.poster}
            alt={props.video?.name}
          />
        </Link>
        <div className="video-card-content">{props.video?.name}</div>
        {/* <HomePageVideo url={props.video?.url} poster={props.video?.poster} />
       {props.video?.name}</div> */}
      </Card>
    </div>
  );
}
