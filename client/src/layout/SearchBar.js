import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { searchQuery } from "../actions";

const SearchBar = props => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.searchQuery(search);
  }, [search]);

  return (
    <nav style={{ marginBottom: "30 px" }}>
      <div className="nav-wrapper blue">
        <form>
          <div className="input-field">
            <input
              onChange={e => setSearch(e.target.value)}
              id="search"
              type="search"
              value={search}
              placeholder="Search Rentals"
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i onClick={() => setSearch("")} className="material-icons">
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { searchQuery }
)(SearchBar);
