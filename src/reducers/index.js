const amount = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_AMOUNT':
      return {
        ...state,
        amountValue: action.payload
      };
    default:
      return state;
  }
};

export default amount;
