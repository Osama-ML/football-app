import React from 'react'

export const Player = props => {

    const player = (props.location && props.location.state) || {};

    return (
        <div>
            <img
                src={player["Avatar"]}
                width="250"
                height="250"
                alt="imagen de la liga"
              ></img>
            <h2>Player {player["Nombre del Jugador"]}</h2>
        </div>
    )
}
