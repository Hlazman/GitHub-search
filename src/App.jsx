import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Prifile";
import { AlertState } from "./context/alert/AlertState";
import { Alert } from "./components/Alert";
import { GithubState } from "./context/github/githubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <HashRouter>
          <Navigation />
          <div className="container pt-4">
            <Alert alert={{ text: "Test alert" }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </HashRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
