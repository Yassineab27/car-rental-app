import React, { useEffect, Fragment } from "react";
import SearchBar from "./layout/SearhBar";
import AddBtn from "./layout/AddBtn";
import Loader from "./layout/Loader";
import RentalList from "./components/rentalList";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <Loader />
      <div className="container">
        <AddBtn />
        <RentalList />
      </div>
    </Fragment>
  );
};

export default App;
