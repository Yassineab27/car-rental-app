import React from "react";
import Moment from "react-moment";

import { connect } from "react-redux";
import { deleteRantel, currentRental } from "../actions";

const Rental = ({ rental, deleteRantel, currentRental }) => {
  const handleDelete = id => {
    const confirm = window.confirm(
      "This action can not be undone. Are you sure ?"
    );
    if (confirm) {
      deleteRantel(id);
    }
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => currentRental(rental)}
          style={{ textTransform: "uppercase" }}
          className={
            rental.allOptions
              ? "amber lighten-2 black-text modal-trigger"
              : "teal lighten-2 black-text modal-trigger"
          }
          href="#edit-rental-modal"
        >
          {rental.car}
        </a>
        <br />
        <span className="grey-text">
          Ranted by{" "}
          <span className="black-text">
            {rental.firstName} {rental.lastName}
          </span>{" "}
          with <span className="red-text">ID #{rental._id}</span> for{" "}
          <span className="black-text">{rental.weeks} week(s)</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{rental.createdAt}</Moment>
        </span>
        <a
          onClick={() => handleDelete(rental._id)}
          href="#"
          className="secondary-content"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          href="#edit-rental-modal"
          onClick={() => currentRental(rental)}
          className="modal-trigger"
        >
          <i className="material-icons green-text">edit</i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteRantel, currentRental }
)(Rental);
