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

  const renderRentals = props.rentals ? (
    props.rentals.map(rental => {
      return <Rental key={rental.id} rental={rental} />;
    })
  ) : (
    <Loader />
  );

  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h2>All Rentals</h2>
      </li>
      {renderRentals}
    </ul>
  );
};

const mapStateToProps = state => {
  return { rentals: state.rentalStore.rentals };
};

export default connect(
  mapStateToProps,
  { getRentals }
)(RentalList);
