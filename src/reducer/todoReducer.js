import actions from "../actions/actions";
const todoReducer = (state, { actionType, payload }) => {
  console.log(payload, actionType);
  switch (actionType) {
    case actions.ADD:
      return [...state, payload];
    case actions.COMPLETED: {
      let cloneState = [...state];
      cloneState.find((todo) => todo.id == payload).isComplete = true;
      console.log(cloneState);
      return cloneState;
    }
    case actions.DELETE:
      return state.filter((todo) => todo.id != payload);
  }
};
export default todoReducer;
