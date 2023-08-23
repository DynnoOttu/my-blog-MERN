import { createStore } from "redux";

const initialState = {
  dataBlog: [],
  name: "Dynno",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
