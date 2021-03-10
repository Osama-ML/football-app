import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export const AllTeams = () => {
  const [allTeams, setAllTeams] = useState([]);

  const teamsArr = async () => {
    const response = await api.get("/teams");
    setAllTeams(response.data);
  };

  useEffect(() => {
    teamsArr();
  }, [setAllTeams]);

  return (
    <div>
      <h2>All teams ({allTeams.length})</h2>
      <hr />
      <Link className="btn btn-primary" to="/add-team">
        New Team
      </Link>
      <ul>
        {allTeams.map((team) => {
          return (
            <li key={team["id"]}>
              {team["Nombre del equipo"]}
              <img
                src={team["Logo del Equipo"]}
                width="50"
                height="50"
                alt="imagen del equipo"
              ></img>
              <Link
                className="link_button"
                to={{
                  pathname: "/players",
                  state: team,
                }}
              >
                Details
              </Link>
              <Link
                className="link_button"
                to={{ pathname: "/edit-team", state: team }}
              >
                Edit
              </Link>
              <button className="link_button">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
