import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = { root: { backgroundColor: "#ccc", height: "100vh" } };

const DashBoard = ({ children, classes }) => (
  <Grid container className={classes.root} alignItems="center" justify="center">
    {children}
  </Grid>
);
export default withStyles(styles)(DashBoard);
