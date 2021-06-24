export const selectBook = (title, cost) => {
  return {
    type: title,
    data: cost,
  };
};
