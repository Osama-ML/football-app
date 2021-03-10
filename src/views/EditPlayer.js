import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import api from "../api";

export const EditPlayer = (props) => {
  const playerToEdit = (props.location && props.location.state) || {};

  const history = useHistory();

  const [playerTeam, setPlayerTeam] = useState({});

  const getPlayerTeam = async () => {
    await api
      .get(`/teams/${playerToEdit["teamId"]}`)
      .then((response) => setPlayerTeam(response.data))
      .catch((err) => console.log(err));
  };

  const [player, setPlayer] = useState(playerToEdit);

  const [allTeams, setAllTeams] = useState([]);

  const teamsArr = async () => {
    const response = await api.get("/teams");
    setAllTeams(response.data);
  };

  useEffect(() => {
    getPlayerTeam();
    teamsArr();
  }, [setAllTeams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      player["Nombre del Jugador"].trim().length > 2 &&
      player["Avatar"].trim().length > 2
    ) {
      api
        .put(`/players/${player["id"]}`, player)
        .then(() => {
          console.log(player);
          history.push("/player", player);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <h1>
        Edit player: "{player["Nombre del Jugador"]}"
        <img
          src={player["Avatar"]}
          width="150"
          height="150"
          alt="imagen del jugador"
        ></img>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="URL image here"
            value={player["Avatar"]}
            onChange={(e) => setPlayer({ ...player, Avatar: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Player name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Player name here"
            value={player["Nombre del Jugador"]}
            onChange={(e) =>
              setPlayer({ ...player, "Nombre del Jugador": e.target.value })
            }
          />
        </div>
        <select
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-sm example"
          onChange={(e) => setPlayer({ ...player, teamId: e.target.value })}
        >
          {allTeams.map((team) => {
            if (team["id"] === playerTeam["id"]) {
              return (
                <option value={team["id"]} selected>
                  {team["Nombre del equipo"]}
                </option>
              );
            } else {
              return (
                <option value={team["id"]}>{team["Nombre del equipo"]}</option>
              );
            }
          })}
        </select>
        <button type="submit">Edit player</button>
      </form>
    </div>
  );
};
