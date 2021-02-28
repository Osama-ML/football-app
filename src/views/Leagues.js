import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../index.css";

import api from "../api";
import cat from "../assets/cat.png";
import { Teams } from "./Teams";

export const Leagues = () => {

  const history = useHistory();

  const routeChange = (liga) => {
    Teams(liga);
    let newPath = "teams";
    history.push({
      pathname: newPath,
      state: liga
    });
  };

  const [leagues, setLeagues] = useState([
    {
      "Nombre De La Liga": "Liga sin nombre",
      "Identificador": "xxxx-xxxx-xxxx",
      "Logo de la Liga": cat,
    },
  ]);

  const leaguesArr = async () => {
    const response = await api.get("/leagues");
    setLeagues(response.data);
  };

  useEffect(() => {
    leaguesArr();
  }, [setLeagues]);

  return (
    <div>
      <h2>Leagues</h2>
      <hr />
      <ul>
        {leagues.map((liga) => {
          return (
            <li>
              {liga["Nombre De La Liga"]}
              <img
                src={liga["Logo de la Liga"]}
                width="50"
                height="50"
                alt="imagen de la liga"
              ></img>
              <Link
                className="link_button"
                to={{
                  pathname: "/teams",
                  state: liga
                }}
              >
                Details
              </Link>
              <button className="link_button" to="#">
                Edit
              </button>
              <button className="link_button">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
