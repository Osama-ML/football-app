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
      <h2>All teams</h2>
      <hr />
      <ul>
        {allTeams.map((team) => {
          return (
            <li>
              {team["Nombre del equipo"]}
              <img
                src={team["Logo del Equipo"]}
                width="50"
                height="50"
                alt="imagen del equipo"
              ></img>
              <Link className="link_button" to="/teams">
                Details
              </Link>
              <Link className="link_button" to="#">
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
