import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routers from "../Routes";

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <Routers />
    </Router>
  </>
);

export default App;
