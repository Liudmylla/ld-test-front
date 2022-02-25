import React, { ReactElement } from "react";
import { Video, Maybe } from "../../generated/graphql";
import {
  TableRow,
  TableCell,
  Box,
  createStyles,
  Theme,
  makeStyles,
  Typography,
} from "@material-ui/core";

interface Props {
  video?: Maybe<Video>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nameTableCell: {
      display: "flex",
      alignItems: "center",
    },
    characterImg: {
      maxHeight: "3rem",
      width: "auto",
      borderRadius: "50%",
    },
    characterName: {
      paddingLeft: theme.spacing(2),
    },
  })
);

export default function VideoInfo(props: Props): ReactElement {
  const classes = useStyles();
  console.log(props);
  return (
    <TableRow>
      <TableCell className={classes.nameTableCell}>
        <Box>
          <img
            src={props.video?.poster}
            alt=""
            className={classes.characterImg}
          />
        </Box>
        <Box>{props.video?.url}</Box>
        <Typography variant="body2" className={classes.characterName}>
          {props.video?.name}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
