import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export const AllPlayers = () => {

  const [allPlayers, setAllPlayers] = useState([]);

  const playersArr = async () => {
    const response = await api.get("/players");
    setAllPlayers(response.data);
  };

  useEffect(() => {
    playersArr();
  }, [setAllPlayers]);

  return (
    <div>
      <h2>All Players</h2>
      <hr />
      <ul>
        {allPlayers.map((player) => {
          return (
            <li>
              {player["Nombre del Jugador"]}
              <img
                src={player["Avatar"]}
                width="50"
                height="50"
                alt="imagen del jugador"
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
