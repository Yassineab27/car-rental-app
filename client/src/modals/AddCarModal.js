import React, { useState } from "react";

import { connect } from "react-redux";
import { addCar } from "../actions";

const AddCarModal = props => {
  const [carName, setCarName] = useState("");
  const [model, setModel] = useState("");

  const onSubmit = () => {
    const newCar = {
      carName,
      model
    };
    console.log(newCar);
    props.addCar(newCar);

    setCarName("");
    setModel("");
  };

  return (
    <div
      id="add-car-modal"
      className="modal"
      style={{ width: "50%", height: "50%" }}
    >
      <div className="modal-content">
        <h4>
          <i className="fas fa-plus-square" /> Add a new Car to the List!
        </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="carName"
              value={carName}
              onChange={e => setCarName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Car Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="model"
              value={model}
              onChange={e => setModel(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Model of the Car
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#"
          className="modal-close waves-effect blue btn"
          onClick={onSubmit}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addCar }
)(AddCarModal);
