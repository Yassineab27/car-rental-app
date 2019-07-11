import React, { useEffect } from "react";
import Car from "../components/Car";

import { connect } from "react-redux";
import { getCars } from "../actions";

const CarsListModal = props => {
  useEffect(() => {
    props.getCars();
  }, []);

  console.log(props.cars);
  const carList = props.cars.length ? (
    props.cars.map(car => <Car key={car._id} car={car} />)
  ) : (
    <h6>0 Cars Available at the moment..</h6>
  );

  return (
    <div
      id="car-list-modal"
      className="modal"
      style={{ width: "65%", height: "65%" }}
    >
      <div className="modal-content">
        <h4 className="center" style={{ color: "#2196f3" }}>
          {props.cars.length} Cars Available <i className="fas fa-car" />
        </h4>
        <ul className="collection">{carList}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return { cars: store.carStore.cars };
};

export default connect(
  mapStateToProps,
  { getCars }
)(CarsListModal);
