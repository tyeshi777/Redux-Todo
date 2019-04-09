import { ADD_TODO } from "../actions";

const initialState = {
  title: "Todo tasks",
  todos: [
    { task: "Walk the dog", completed: false, id: 1 },
    { name: "Wipe the dog ass", completed: false, id: 2 },
    { name: "Pick up the dog shit", completed: false, id: 3 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, completed: false, id: Date.now() }
        ]
      };
    default:
      return state;
  }
}

export default reducer;
