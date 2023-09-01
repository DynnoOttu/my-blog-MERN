const initialState = {
  name: "Dynno",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "YOHANIS",
    };
  }

  return state;
};

export default globalReducer;
