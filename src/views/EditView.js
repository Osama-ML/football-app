import React from "react";

export const EditPlayer = (props) => {
  const player = (props.location && props.location.state) || {};

  return (
    <div>
      <h1>EditPlayer</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="URL image here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Player name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Player name here"
          />
        </div>
        <select
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-sm example"
        >
          <option defaultValue>Select the team</option>
        </select>
        <button type="submit">Add new player</button>
      </form>
    </div>
  );
};
