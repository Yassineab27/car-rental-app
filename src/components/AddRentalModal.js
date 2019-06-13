import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";
import { addRental } from "../actions";

const AddRentalModal = props => {
  const [car, setCar] = useState("");
  const [allOptions, setAllOptions] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [days, setDays] = useState("");

  const onSubmit = () => {
    if (!firstName || !lastName || !car || !days) {
      M.toast({ html: "Please fill in all fields" });
    } else {
      const newRental = {
        car,
        allOptions,
        firstName,
        lastName,
        days,
        date: new Date()
      };
      console.log(newRental);
      props.addRental(newRental);

      M.toast({ html: `Car Rented by ${firstName} ${lastName}!` });

      // Clear Fields
      setFirstName("");
      setLastName("");
      setCar("");
      setDays("");
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
              <option value="Honda">Honda Civic 2018</option>
              <option value="Wolkswagen">Wolkswagen Polo 2018</option>
              <option value="Renault">Renault Clio 2017</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="days"
              value={days}
              className="browser-default"
              onChange={e => setDays(e.target.value)}
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

export default connect(
  null,
  { addRental }
)(AddRentalModal);
