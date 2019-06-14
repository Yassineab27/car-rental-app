import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { connect } from "react-redux";
import { editRental } from "../actions";

const EditRentalModal = ({ editRental, current }) => {
  const [car, setCar] = useState("");
  const [allOptions, setAllOptions] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weeks, setWeeks] = useState("");

  useEffect(() => {
    if (current) {
      setCar(current.car);
      setAllOptions(current.allOptions);
      setFirstName(current.firstName);
      setLastName(current.lastName);
      setWeeks(current.weeks);
    }
  }, [current]);

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
        date: new Date(),
        id: current.id
      };
      console.log(newRental);
      editRental(current.id, newRental);

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
      id="edit-rental-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Edit Your Information</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
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
  return { current: store.rentalStore.current };
};

export default connect(
  mapStateToProps,
  { editRental }
)(EditRentalModal);
