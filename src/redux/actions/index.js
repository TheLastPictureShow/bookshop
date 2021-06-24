export const selectBook = (title, cost) => {
  return {
    type: "SELECTION",
    title: title,
    data: cost,
  };
};
