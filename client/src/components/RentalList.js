import React, { Component } from "react";
import { connect } from "react-redux";
import { getRentals } from "../actions";
import Rental from "./Rental";
import Loader from "../layout/Loader";

class RentalList extends Component {
  componentDidMount() {
    this.props.getRentals();
  }

  render() {
    if (!this.props.rentals) {
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
        {!this.props.rentals.length ? (
          <h4 className="center">0 Rentals Found!</h4>
        ) : (
          this.props.rentals.map(rental => {
            return <Rental key={rental._id} rental={rental} />;
          })
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { rentals, filter } = state.rentalStore;
  if (!rentals) {
    return {};
  }
  return {
    rentals: rentals.filter(
      rental =>
        rental.firstName.startsWith(filter) ||
        rental.firstName.toLowerCase().startsWith(filter) ||
        rental.car.toLowerCase().startsWith(filter)
    )
  };
};

export default connect(
  mapStateToProps,
  { getRentals }
)(RentalList);
