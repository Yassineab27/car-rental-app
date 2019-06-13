const initialState = {
  rentals: null,
  current: null
};

const rentalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RENTALS":
      return { ...state, rentals: action.payload };
    default:
      return state;
  }
};

export default rentalsReducer;
