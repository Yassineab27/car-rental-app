import React from "react";

import { connect } from "react-redux";
import { deleteCar } from "../actions";

const Car = ({ car, deleteCar }) => {
  const handleDelete = id => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Car from the List ?"
    );

    if (confirm) {
      deleteCar(id);
    }
  };

  return (
    <li className="collection-item">
      <div>
        {car.carName} - {car.model}
        <a
          href="#"
          onClick={() => handleDelete(car._id)}
          className="secondary-content"
        >
          <i className="material-icons">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteCar }
)(Car);
