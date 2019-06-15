import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";
import { addRental } from "../actions";

const AddRentalModal = props => {
  const [car, setCar] = useState("");
  const [allOptions, setAllOptions] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weeks, setWeeks] = useState("");

  const onSubmit = () => {
    if (!firstName || !lastName || !car || !weeks) {
      M.toast({ html: "Please fill in all fields" });
    } else {
      const newRental = {
        car,
        allOptions,
        firstName,
        lastName,
        weeks,
        date: new Date()
      };
      console.log(newRental);
      props.addRental(newRental);

      M.toast({ html: `Car Rented by ${firstName} ${lastName}!` });

      // Clear Fields
      setFirstName("");
      setLastName("");
      setCar("");
      setWeeks("");
      setAllOptions(false);
    }
  };

  return (
    <div
      id="add-rental-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter Information</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="car"
              value={car}
              className="browser-default"
              onChange={e => setCar(e.target.value)}
            >
              <option value="" disabled>
                Select the Car you want
              </option>
              {props.cars.map(car => (
                <option key={car.id} value={car.carName}>
                  {car.carName} - {car.model}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="weeks"
              value={weeks}
              className="browser-default"
              onChange={e => setWeeks(e.target.value)}
            >
              <option value="" disabled>
                For how long you need this Car ?
              </option>
              <option value="1">1 week</option>
              <option value="2">2 weeks</option>
              <option value="3">3 weeks</option>
              <option value="4">4 weeks</option>
              <option value="5">5 weeks</option>
              <option value="6">6 weeks</option>
              <option value="7">7 weeks</option>
              <option value="8">8 weeks</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={allOptions}
                  value={allOptions}
                  onChange={e => setAllOptions(!allOptions)}
                />
                <span>Do you want this car with all its Options ?</span>
              </label>
            </p>
            <div style={{ display: "flex" }}>
              {allOptions ? (
                <div
                  style={{
                    borderBottom: "solid #ffc107 10px",
                    width: "3rem",
                    marginRight: "1rem"
                  }}
                >
                  <p>Full Options</p>
                </div>
              ) : (
                <div
                  style={{
                    borderBottom: "solid #4db6ac 10px",
                    width: "3rem"
                  }}
                >
                  <p>No Options</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return { cars: store.carStore.cars };
};

export default connect(
  mapStateToProps,
  { addRental }
)(AddRentalModal);
