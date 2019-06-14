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

export const editRental = (rental, form) => {
  return async dispatch => {
    const response = await fetchData.patch(`/rentals/${rental.id}`, form);

    dispatch({ type: "EDIT_RENTAL", payload: response.data });
  };
};

export const currentRental = rental => {
  return {
    type: "CURRENT_RENTAL",
    payload: rental
  };
};
