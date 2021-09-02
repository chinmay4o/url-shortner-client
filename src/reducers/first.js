const initialState = {
  value: 0,
  name: "",
  myUrls: []
};

const changeUser = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: state.value + 1,
        name: action.payload.email,
        myUrls: action.payload.myUrls
      };
    default:
      return state;
  }
};

export default changeUser;
