import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import ExplorePage from "./pages/ExplorePage";
import { Helmet } from "react-helmet";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppContext from "./context";
import Footer from "./components/Footer/Footer";
import LoadingSpiner from "./components/SpinnerComponent/LoadingSpiner";

const LikePage = React.lazy(() => import("./pages/LikePage"));
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
        <NavBar />
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpiner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <ExplorePage />
            </Route>
            <Route exact path="/liked">
              <LikePage />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </AppContext>
    </Router>
  );
};

export default App;
