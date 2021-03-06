import React, { useEffect, useState } from "react";
import api from "../api";

export const Player = (props) => {
  const player = (props.location && props.location.state) || {};

  const teamArr =  () => {
     api
      .get(`/teams/${player["teamId"]}`)
      .then((response) => setAllTeam(response.data));
  };

  const [team, setAllTeam] = useState({});

  useEffect(() => {
    teamArr();
  }, [setAllTeam]);

  console.log(player["teamId"], team["id"]);

  return (
    <div>
      <h2>Player {player["Nombre del Jugador"]}</h2>
      <img
        src={player["Avatar"]}
        width="250"
        height="250"
        alt="imagen del jugador"
      ></img>

      <h3>Team: {team["Nombre del equipo"]}</h3>
      <img
        src={team["Logo del Equipo"]}
        width="150"
        height="150"
        alt="imagen del equipo"
      ></img>
    </div>
  );
};
