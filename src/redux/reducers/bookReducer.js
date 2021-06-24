const bookReducer = (state = undefined, action) => {
  return {
    title: action.type,
    cost: action.data,
  };
};

export default bookReducer;
