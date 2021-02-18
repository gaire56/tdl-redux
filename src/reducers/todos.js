const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {};
    case 'DELETE':
      return {};
    default:
      return state;
  }
};
export default todos;
