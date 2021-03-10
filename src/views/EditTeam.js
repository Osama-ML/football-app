import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../api";

export const EditTeam = (props) => {
  const teamToEdit = (props.location && props.location.state) || {};

  const history = useHistory();

  const [teamLeague, setTeamLeague] = useState({});

  const getTeamLeague = async () => {
    await api
      .get(`/teams/${teamToEdit["id"]}`)
      .then((response) => setTeamLeague(response.data))
      .catch((err) => console.log(err));
  };

  const [newTeam, setTeam] = useState(teamToEdit);

  const [allLeagues, setAllLeagues] = useState([]);

  const leaguesArr = async () => {
    const response = await api.get("/leagues");
    setAllLeagues(response.data);
  };

  useEffect(() => {
    getTeamLeague();
    leaguesArr();
  }, [setAllLeagues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newTeam["Nombre del equipo"].trim().length > 2 &&
      newTeam["Logo del Equipo"].trim().length > 2
    ) {
      api
        .put(`/teams/${newTeam["id"]}`, newTeam)
        .then(() => {
          console.log(newTeam);
          history.push("/teams", newTeam);
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <h1>
        Edit team: "{teamToEdit["Nombre del equipo"]}"
        <img
          src={teamToEdit["Logo del Equipo"]}
          width="150"
          height="150"
          alt="imagen del equipo"
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
            value={newTeam["Logo del Equipo"]}
            onChange={(e) =>
              setTeam({ ...newTeam, "Logo del Equipo": e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Player name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Player name here"
            value={newTeam["Nombre del equipo"]}
            onChange={(e) =>
              setTeam({ ...newTeam, "Nombre del equipo": e.target.value })
            }
          />
        </div>
        <select
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-sm example"
          onChange={(e) => setTeam({ ...newTeam, "Liga": e.target.value })}
        >
          {allLeagues.map((league) => {
            if (league["Identificador"] === teamLeague["id"]) {
              return (
                <option value={league["Identificador"]} selected>
                  {league["Nombre De La Liga"]}
                </option>
              );
            } else {
              return (
                <option value={league["Identificador"]}>
                  {league["Nombre De La Liga"]}
                </option>
              );
            }
          })}
        </select>
        <button type="submit">Edit player</button>
      </form>
    </div>
  );
};
