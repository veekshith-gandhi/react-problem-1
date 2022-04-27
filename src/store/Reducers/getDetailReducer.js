/** @format */

import ActionType from "../../constants/actionType";

const initalState = [
  {
    id: 1,
    country: "India",
    city: "Delhi",
    population: 1234566,
  },
];

const getDetailsReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.GETDATA:
      return [...action.payload];

    case ActionType.DELETECOUNTRY:
      let result = state.filter((i) => i.id !== action.payload);
      console.log(result);
      return [...result];
    case ActionType.EDITDETAILS:
      let data = state.filter((i) => i.id !== action.payload.id);

      console.log([...data, action.payload]);

      // data[0].country = action.payload.country;
      // data[0].city = action.payload.city;
      // data[0].population = action.payload.population;
      // console.log([...state, data[0]]);
      return [...data, action.payload];
    default:
      return state;
  }
};

export default getDetailsReducer;
