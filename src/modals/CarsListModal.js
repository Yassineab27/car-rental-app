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
    props.cars.map(car => <Car key={car.id} car={car} />)
  ) : (
    <h4>0 Cars Available at the moment..</h4>
  );

  return (
    <div
      id="car-list-modal"
      className="modal"
      style={{ width: "50%", height: "50%" }}
    >
      <div className="modal-content">
        <h2 className="center">Available Cars</h2>
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
