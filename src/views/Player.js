import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../api";

export const Player = (props) => {
  const history = useHistory();

  const player = (props.location && props.location.state) || {};

  const teamArr = () => {
    api
      .get(`/teams/${player["teamId"]}`)
      .then((response) => setAllTeam(response.data));
  };

  const [team, setAllTeam] = useState({});

  const handleDelete = async (id) => {
    await api
      .delete(`/players/${id}`)
      .then(() => history.push('/all-players'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    teamArr();
  }, [setAllTeam]);

  return (
    <div>
      <h2>Player: {player["Nombre del Jugador"]}</h2>
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
      <Link to={{ pathname: "/edit-player", state: player }}>Edit player</Link>
      <button
        className="link_button"
        onClick={() => {
          handleDelete(player["id"]);
        }}
      >
        Delete
      </button>
    </div>
  );
};
