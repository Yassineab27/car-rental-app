import React, { useEffect, Fragment } from "react";
import SearchBar from "./layout/SearchBar";
import AddBtn from "./layout/AddBtn";
import RentalList from "./components/RentalList";
import AddRentalModal from "./modals/AddRentalModal";
import EditRentalModal from "./modals/EditRentalModal";
import AddCarModal from "./modals/AddCarModal";
import CarsListModal from "./modals/CarsListModal";

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
      <div className="container">
        <AddBtn />
        <AddRentalModal />
        <EditRentalModal />
        <AddCarModal />
        <CarsListModal />
        <RentalList />
      </div>
    </Fragment>
  );
};

export default App;
