import React from "react";

export default () => {
  return (
    <div className="homeNav">
      <div className="homeNavComponents">
        <a href="#" className="logo">
          f
        </a>
        <input
          type="text"
          className="searchInput"
          placeholder="This Actually Doesn't Work"
        />
        <a href="#" className="homeNavHome">
          Home
        </a>
        <a href="#" className="homeNavProfile">
          Profile
        </a>
      </div>
    </div>
  );
};
