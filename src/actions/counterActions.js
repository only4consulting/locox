// Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// Action creators 
export const incrementCounter = (value) => {
  return ({
    type: INCREMENT,
    payload: value
  });
}

export const decrementCounter = (value) => {
  return ({
    type: DECREMENT,
    payload: value
  });
}

export const resetCounter = () => {
  return ({
    type: RESET
  });
}

// Action creator con thunk
export const actionWithThunk = (value) => async (dispatch, getState) => {
  dispatch(reset());
  dispatch(increment(value));
}
