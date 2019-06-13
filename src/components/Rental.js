import React from "react";
import Moment from "react-moment";

const Rental = ({ rental }) => {
  return (
    <li className="collection-item">
      <div>
        <a className={rental.AllOptions ? "red-text" : "blue-text"} href="#">
          {rental.car}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{rental.id}</span> Ranted by{" "}
          <span className="black-text">{rental.name}</span> for{" "}
          <span className="black-text">{rental.days} days</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{rental.date}</Moment>
        </span>
        <a href="#" className="secondary-content">
          <i className="material-icons red-text">delete</i>
        </a>
        <a href="#">
          <i className="material-icons green-text">edit</i>
        </a>
      </div>
    </li>
  );
};

export default Rental;
