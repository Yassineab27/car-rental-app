import fetchData from "../apis/fetchData";

export const getRentals = () => {
  return async dispatch => {
    const response = await fetchData.get("/rentals");

    dispatch({ type: "GET_RENTALS", payload: response.data });
  };
};
