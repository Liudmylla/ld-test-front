import {
  CircularProgress,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
import { ReactElement } from "react";
import { useGetAllVideosFunzoneQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";

interface Props {}
// todo pagination

export default function FunzoneVideos(props: Props): ReactElement {
  const { data, loading, error } = useGetAllVideosFunzoneQuery();
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

  return (
    <>
      <Typography variant="h5">FUNZONE</Typography>
      <Grid container spacing={2}>
        {data.allVideos.items.map((video) => (
          <Grid item sm={12} md={6} lg={3}>
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
