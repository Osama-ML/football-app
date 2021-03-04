import React, { useState, useEffect } from "react";
import api from "../api";

export const AddPlayer = (props) => {
  const [player, setPlayer] = useState({
    "Nombre del Jugador": "",
    id: "",
    Avatar: "",
    teamId: "",
  });

  const [allTeams, setAllTeams] = useState([]);

  const teamsArr = async () => {
    const response = await api.get("/teams");
    setAllTeams(response.data);
  };

  useEffect(() => {
    teamsArr();
  }, [setAllTeams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      player["Nombre del Jugador"].trim().length > 2 &&
      player["Avatar"].trim().length > 2
    ) {
      api
        .post("/players", player)
        .then(() => console.log(player))
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <h1>AddPlayer</h1>
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
          onChange={e => setPlayer({ ...player, "teamId": e.target.value })}
        >
          <option defaultValue>Select the team</option>
          {allTeams.map((team) => {
            return (
              <option  value={team["id"]}>{team['Nombre del equipo']}</option>
            );
          })}
        </select>
        <button type="submit">Add new player</button>
      </form>
    </>
  );
};