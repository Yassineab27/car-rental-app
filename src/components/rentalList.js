import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRentals } from "../actions";
import Rental from "./Rental";
import Loader from "../layout/Loader";

const RentalList = props => {
  console.log(props.rentals);
  useEffect(() => {
    props.getRentals();
  }, []);

  if (!props.rentals) {
    return <Loader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h2>
          <i className="fas fa-clipboard-list" style={{ color: "#2196f3" }} />{" "}
          Rentals
        </h2>
      </li>
      {!props.rentals.length ? (
        <h4 className="center">0 Rentals Found!</h4>
      ) : (
        props.rentals.map(rental => {
          return <Rental key={rental.id} rental={rental} />;
        })
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    rentals: state.rentalStore.rentals,
    isLoading: state.rentalStore.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getRentals }
)(RentalList);
