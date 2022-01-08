import React from "react";

import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppContext from "./context";

const App = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Spacestagram</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <AppContext>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <ExplorePage />
          </Route>
        </Switch>
      </AppContext>
    </Router>
  );
};

export default App;
