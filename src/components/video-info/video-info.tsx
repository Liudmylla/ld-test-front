import React, { ReactElement } from "react";
import { Video, Maybe } from "../../generated/graphql";
import { Card, CardContent, Typography } from "@material-ui/core";
import HomePageVideo from "../home-page-video";

interface Props {
  video?: Maybe<Video>;
}

export default function VideoInfo(props: Props): ReactElement {
  return (
    <div className="video-info">
      <Card>
        <HomePageVideo url={props.video?.url} poster={props.video?.poster} />
        <CardContent>
          <Typography gutterBottom component="div">
            {props.video?.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
