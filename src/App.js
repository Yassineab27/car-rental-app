import React, { useEffect } from "react";
import SearchBar from "./layout/SearhBar";
import AddBtn from "./layout/AddBtn";
import Loader from "./layout/Loader";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <SearchBar />
      <Loader />
      <AddBtn />
    </div>
  );
};

export default App;
