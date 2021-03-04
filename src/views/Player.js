import React, { useEffect, useState } from "react";
import api from "../api";

export const Player = (props) => {
  const player = (props.location && props.location.state) || {};

  const [team, setAllTeam] = useState({});

  const teamArr = async () => {
    await api
      .get("/teams")
      .then((response) =>
        setAllTeam(
          response.data.filter((team) => team["id"] === player["teamId"])
        )
      );
  };

  useEffect(() => {
    teamArr();
  }, [setAllTeam]);

  return (
    <div>
      <h2>Player {player["Nombre del Jugador"]}</h2>
      <img
        src={player["Avatar"]}
        width="250"
        height="250"
        alt="imagen de la liga"
      ></img>

      <h3>Team: {team[0]["Nombre del equipo"]}</h3>
      <img
        src={team[0]["Logo del Equipo"]}
        width="150"
        height="150"
        alt="imagen del equipo"
      ></img>
    </div>
  );
};
