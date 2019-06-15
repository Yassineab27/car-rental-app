import fetchData from "../apis/fetchData";

export const getRentals = () => {
  return async dispatch => {
    const response = await fetchData.get("/rentals");

    dispatch({ type: "GET_RENTALS", payload: response.data });
  };
};

export const addRental = rental => {
  return async dispatch => {
    const response = await fetchData.post("/rentals", rental);

    dispatch({ type: "ADD_RENTAL", payload: response.data });
  };
};

export const deleteRantel = id => {
  return async dispatch => {
    await fetchData.delete(`/rentals/${id}`);

    dispatch({ type: "DELETE_RENTAL", payload: id });
  };
};

export const editRental = (id, rental) => {
  return async dispatch => {
    const response = await fetchData.patch(`/rentals/${id}`, rental);

    dispatch({ type: "EDIT_RENTAL", payload: response.data });
  };
};

export const currentRental = rental => {
  return {
    type: "CURRENT_RENTAL",
    payload: rental
  };
};

export const searchQuery = search => {
  return async dispatch => {
    const response = await fetchData.get(`/rentals?q=${search}`);

    dispatch({ type: "SEARCH_QUERY", payload: response.data });
  };
};

export const addCar = car => {
  return async dispatch => {
    const response = await fetchData.post(`/cars`, car);

    dispatch({ type: "ADD_CAR", payload: response.data });
  };
};

export const deleteCar = id => {
  return async dispatch => {
    await fetchData.delete(`/cars/${id}`);

    dispatch({ type: "DELETE_CAR", payload: id });
  };
};

export const getCars = () => {
  return async dispatch => {
    const response = await fetchData.get("/cars");

    dispatch({ type: "GET_CARS", payload: response.data });
  };
};
