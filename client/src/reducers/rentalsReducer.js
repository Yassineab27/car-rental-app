const initialState = {
  rentals: null,
  current: null,
  filter: ""
};

const rentalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_RENTAL":
      return { ...state, filter: action.payload };
    case "SEARCH_QUERY":
      return { ...state, rentals: action.payload };
    case "CURRENT_RENTAL":
      return { ...state, current: action.payload };
    case "EDIT_RENTAL":
      return {
        ...state,
        rentals: state.rentals.map(rental =>
          rental._id === action.payload._id ? action.payload : rental
        )
      };
    case "DELETE_RENTAL":
      return {
        ...state,
        rentals: state.rentals.filter(rental => rental._id !== action.payload)
      };
    case "ADD_RENTAL":
      return { ...state, rentals: [...state.rentals, action.payload] };
    case "GET_RENTALS":
      return { ...state, rentals: action.payload };
    default:
      return state;
  }
};

export default rentalsReducer;
