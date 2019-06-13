import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-rental-modal"
        className="btn-floating btn-large blue modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#car-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">directions_car</i>
          </a>
        </li>
        <li>
          <a href="#add-car-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">plus_one</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
