import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import api from "../api";

export const AddTeam = (props) => {
  const defaultLeague = (props.location && props.location.state) || {};

  const history = useHistory();

  const [team, setTeam] = useState({
    "Nombre del equipo": "",
    id: new Date().getTime(),
    "Logo del Equipo": "",
    Liga: "",
  });

  const [allLeagues, setAllLeagues] = useState([]);

  const leaguesArr = async () => {
    const response = await api.get("/leagues");
    setAllLeagues(response.data);
  };

  useEffect(() => {
    leaguesArr();
  }, [setAllLeagues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      team["Nombre del equipo"].trim().length > 2 &&
      team["Logo del Equipo"].trim().length > 2
    ) {
      api
        .post("/teams", team)
        .then(() => {
          history.push("/players", team);
        })
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
            value={team["Logo del Equipo"]}
            onChange={(e) => setTeam({ ...team, "Logo del Equipo": e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Team name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Team name here"
            value={team["Nombre del equipo"]}
            onChange={(e) =>
              setTeam({ ...team, "Nombre del equipo": e.target.value })
            }
          />
        </div>
        <select
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-sm example"
          onChange={(e) => setTeam({ ...team, Liga: e.target.value })}
        >
          <option selected>Select league</option>
          {allLeagues.map((league) => {
            return (
              <option key={league["Identificador"]} value={league["Identificador"]}>
                {league["Nombre De La Liga"]}
              </option>
            );
          })}
        </select>
        <button type="submit">Add new team</button>
      </form>
    </>
  );
};
