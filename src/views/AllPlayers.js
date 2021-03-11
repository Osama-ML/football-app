import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { Pagination } from "./Pagination";

export const AllPlayers = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10)

  const playersArr = async () => {
    await api
      .get("/players")
      .then((response) => setAllPlayers(response.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    await api
      .delete(`/players/${id}`)
      .then(() =>
        setAllPlayers(allPlayers.filter((player) => player.id !== id))
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    playersArr();
  }, [setAllPlayers]);

  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPlayers = allPlayers.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>All Players ({allPlayers.length})</h2>
      <hr />
      <Link className="btn btn-primary" to="/add-player">
        New Player
      </Link>
      <ul>
        {currentPlayers.reverse().map((player) => {
          return (
            <li key={player["id"]}>
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
              <Link
                className="link_button"
                to={{ pathname: "/edit-player", state: player }}
              >
                Edit
              </Link>
              <button
                className="link_button"
                onClick={() => {
                  handleDelete(player["id"]);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <Pagination postPerPage={postsPerPage} totalPosts={allPlayers.length} paginate={paginate}/>
    </div>
  );
};
