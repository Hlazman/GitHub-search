import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Prifile";
import { AlertState } from "./context/alert/AlertState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navigation />
        <div className="container pt-4">
          <Alert alert={{ text: "Test alert" }} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
