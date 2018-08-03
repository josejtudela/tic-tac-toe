const findById = (state, id) => {
  if (state === undefined) {
    return state;
  }
  const squareData = state.squares.filter((square) => {
    const isSameId = square.id === id;
    return isSameId;
  })[0];

  return squareData;
};

export default findById;
