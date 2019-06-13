import React from "react";
import Moment from "react-moment";

import { connect } from "react-redux";
import { deleteRantel } from "../actions";

const Rental = ({ rental, deleteRantel }) => {
  return (
    <li className="collection-item">
      <div>
        <a className={rental.allOptions ? "red-text" : "blue-text"} href="#">
          Customer #{rental.id}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">{rental.car}</span> Ranted by{" "}
          <span className="black-text">
            {rental.firstName} {rental.lastName}
          </span>{" "}
          for <span className="black-text">{rental.weeks} week(s)</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{rental.date}</Moment>
        </span>
        <a
          onClick={() => deleteRantel(rental.id)}
          href="#"
          className="secondary-content"
        >
          <i className="material-icons red-text">delete</i>
        </a>
        <a href="#">
          <i className="material-icons green-text">edit</i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteRantel }
)(Rental);
