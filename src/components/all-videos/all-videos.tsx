import {
  CircularProgress,
  Paper,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { useGetAllVideosQuery } from "../../generated/graphql";
import VideoInfo from "../video-info/video-info";

interface Props {}

export default function AllVideos(props: Props): ReactElement {
  // Use hook to retrieve data from the backend
  const { data, loading, error } = useGetAllVideosQuery();

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
    <TableContainer component={Card}>
      <Table>
        <TableBody>
          {data.allVideos.items.map((video) => (
            <VideoInfo video={video} key={video?.id!} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
