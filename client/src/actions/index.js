const axios = require("axios");

export const getRentals = () => {
  return async dispatch => {
    const response = await axios.get("/rentals");

    dispatch({ type: "GET_RENTALS", payload: response.data });
  };
};

export const addRental = rental => {
  return async dispatch => {
    const response = await axios.post("/rentals", rental);

    dispatch({ type: "ADD_RENTAL", payload: response.data });
  };
};

export const deleteRantel = id => {
  return async dispatch => {
    await axios.delete(`/rentals/${id}`);

    dispatch({ type: "DELETE_RENTAL", payload: id });
  };
};

export const editRental = (id, rental) => {
  return async dispatch => {
    const response = await axios.patch(`/rentals/${id}`, rental);

    dispatch({ type: "EDIT_RENTAL", payload: response.data });
  };
};

export const filterRentals = search => {
  return { type: "SEARCH_RENTAL", payload: search };
};

export const currentRental = rental => {
  return {
    type: "CURRENT_RENTAL",
    payload: rental
  };
};

export const addCar = car => {
  return async dispatch => {
    const response = await axios.post("/cars", car);

    dispatch({ type: "ADD_CAR", payload: response.data });
  };
};

export const deleteCar = id => {
  return async dispatch => {
    await axios.delete(`/cars/${id}`);

    dispatch({ type: "DELETE_CAR", payload: id });
  };
};

export const getCars = () => {
  return async dispatch => {
    const response = await axios.get("/cars");

    dispatch({ type: "GET_CARS", payload: response.data });
  };
};
