const initialState = {
  cars: []
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload)
      };
    case "GET_CARS":
      return { ...state, cars: action.payload };
    case "ADD_CAR":
      return { ...state, cars: [...state.cars, action.payload] };
    default:
      return state;
  }
};

export default carsReducer;
