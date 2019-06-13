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
