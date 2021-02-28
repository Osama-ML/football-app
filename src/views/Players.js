import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export const Players = (props) => {
  const team = (props.location && props.location.state) || {};

  const [players, setPlayers] = useState([
    {
      "Nombre del Equipo": "Liga sin nombre",
      id: "xxxx-xxxx-xxxx",
    },
  ]);

  const playersArr = async () => {
    const response = await api.get("/players");
    setPlayers(
      response.data.filter((player) => team["id"] === player["teamId"])
    );
  };

  useEffect(() => {
    playersArr();
  }, [setPlayers]);

  return (
    <div>
      <h2>Players of {team["Nombre del equipo"]}</h2>
      <ul>
        {players.map((player) => {
          return (
            <li>
              {player["Nombre del Jugador"]}
              <img
                src={player["Avatar"]}
                width="50"
                height="50"
                alt="imagen de la liga"
              ></img>
              <Link
                className="link_button"
                to={{
                  pathname: "/player",
                  state: player,
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
