import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:name" element={<Profile />} />
            </Routes>
          </div>
        </HashRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
