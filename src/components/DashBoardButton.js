import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const DashBoardButton = ({ children, to }) => (
  <Button
    component={Link}
    to={to}
    variant="outlined"
    color="primary"
    size="large"
  >
    {children}
  </Button>
);
export default DashBoardButton;
