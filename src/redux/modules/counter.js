const INCREMENT = 'yatzee/counter/INCREMENT';

const initialState = 0;

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}
