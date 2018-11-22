import { INCREMENT, DECREMENT, RESET } from '../actions/counterActions';

// Estado inicial
const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {

  // Evaluar la acción
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      }

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      }

    case RESET:
      return {
        ...state,
        counter: 0
      }

    default:
      return state;
  }
}
