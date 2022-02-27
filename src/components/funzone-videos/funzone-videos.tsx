import {
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { useGetAllVideosFunzoneQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";
import VideoInfo from "../video-info/video-info";

interface Props {}
export {};
export default function FunzoneVideos(props: Props): ReactElement {
  // Use hook to retrieve data from the backend
  const { data, loading, error } = useGetAllVideosFunzoneQuery();

  // Query state management
  if (loading) {
    return <CircularProgress />;
  } else if (error) {
    return (
      <Typography variant="h5">
        Error retrieving data, please reload the page to try again.
      </Typography>
    );
  } else if (!data || !data.allVideos || !data.allVideos.items) {
    return (
      <Typography variant="h5">
        No data available, please reload the page to try again.
      </Typography>
    );
  }

  // Display the data
  return (
    <>
      <Typography variant="h5">FUNZONE</Typography>
      <Grid container spacing={2}>
        {data.allVideos.items.map((video) => (
          <Grid item xs={3}>
            <Card>
              <Link to={`/video/${video?.id}`}>
                <CardMedia
                  component="img"
                  height="194"
                  image={video?.poster}
                  alt={video?.name}
                />
              </Link>
              <div className="video-card-content">{video?.name}</div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
