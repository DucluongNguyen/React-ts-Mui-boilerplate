import ReducerInterface from "interfaces/reducerInterface";
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const countReducer = (state = { count: 0 }, action: ReducerInterface) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      state;
  }
};
