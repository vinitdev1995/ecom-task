import React from "react";
import {
  IconButton,
  Typography,
  Grid,
  Link,
  Theme
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "auto",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    marginTop: 160
  },
  waveWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
  },
  waveSvg: {
    position: "relative",
    display: "block",
    width: "calc(168% + 1.3px)",
    height: 150,
    [theme.breakpoints.up("sm")]: {
      width: "calc(100% + 1.3px)",
      height: 110,
      transform: "rotateY(180deg)",
    },
  },
  wavePath: {
    fill: "#fff",
  },
  whiteText: {
    color: theme.palette.common.white,
  },
  centerText: {
    textAlign: "center",
  },
  marginTopOne: {
    marginTop: theme.spacing(1),
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      component="footer"
      container
      direction="column"
      className={classes.container}
    >
      <Grid item>
        <Link href="#" target="_blank">
          <IconButton>
            <FacebookIcon className={classes.whiteText} />
          </IconButton>
        </Link>
        <Link href="#" target="_blank">
          <IconButton>
            <InstagramIcon className={classes.whiteText} />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Typography
          className={classNames(
            classes.centerText,
            classes.whiteText,
            classes.marginTopOne
          )}
        >
          &copy; {new Date().getFullYear()}  All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default React.memo(Footer);
