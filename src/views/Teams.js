import React from "react";

export const Teams = props => {

  const liga = (props.location && props.location.state) || {};
  
  console.log(liga)

  return (
    <div>
      <h2>Teams of {liga["Nombre De La Liga"]}</h2>
      <p>xdxd</p>
    </div>
  );
};
