const bookReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECTION":
      return {
        ...state,
        title: action.title,
        cost: action.data,
      };
    default:
      return "";
  }
};

export default bookReducer;
