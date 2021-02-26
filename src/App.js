import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

import { Leagues } from "./views/Leagues";
import { AllTeams } from "./views/AllTeams";
import { AllPlayers } from "./views/AllPlayers";
import { Landing } from "./views/Landing";

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🧢 blueC4P
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/leagues"
                >
                  Leagues
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/all-teams"
                >
                  Teams
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/all-players"
                >
                  Players
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Route path="/" exact component={Landing} />
      <Route path="/leagues" component={Leagues} />
      <Route path="/all-teams" component={AllTeams} />
      <Route path="/all-players" component={AllPlayers} />
    </Router>
  );
};
