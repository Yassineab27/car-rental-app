const initialState = {
  rentals: null,
  current: null
};

const rentalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_RENTAL":
      return { ...state, current: action.payload };
    case "EDIT_RENTAL":
      return {
        ...state,
        rentals: state.rentals.map(rental =>
          rental.id === action.payload.id ? action.payload : rental
        )
      };
    case "DELETE_RENTAL":
      return {
        ...state,
        rentals: state.rentals.filter(rental => rental.id !== action.payload)
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
