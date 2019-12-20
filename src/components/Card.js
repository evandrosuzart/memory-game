import React from "react";
import MuCrd from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typografi from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const width = "160px";
const height = "200px";
const styles = {
  root: {
    width,
    height,
    margin: "12px",
    cursor: "pointer"
  },
  flipper: {
    transition: "0.6s",
    transformStyles: "preserve-3d",
    position: "relative"
  },
  flipperRotate: {
    transform: "rotateY(180deg)"
  },
  page: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden"
  },
  pageFront: {
    backgroundColor: "silver",
    transform: "rotateY(0deg)",
    zIndex: 2
  },
  pageBack: {}
};

const Card = ({ name, classes, isAtive }) => (
  <div className={classes.root}>
    <div
      className={classNames(classes.flipper, {
        [classes.flipperRotate]: isAtive
      })}
    >
      <MuCrd>
        <CardContent>
          <Typografi>{name}</Typografi>
        </CardContent>
      </MuCrd>
    </div>
  </div>
);
export default Card;
