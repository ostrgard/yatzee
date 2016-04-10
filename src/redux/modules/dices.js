const TOGGLE_LOCK = 'yatzee/dices/TOGGLE_LOCK';
const ROLL = 'yatzee/dices/ROLL';
const RESET = 'yatzee/dices/RESET';

function random() {
  return Math.ceil(Math.random() * 6);
}

function createDice(id) {
  return {
    id: id,
    value: random(),
    locked: false
  };
}

const initialState = {
  rollCount: 0,
  dices: [
    createDice(0),
    createDice(1),
    createDice(2),
    createDice(3),
    createDice(4),
    createDice(5),
  ]
};

function dice(state, action = {}) {
  switch (action.type) {
    case TOGGLE_LOCK:
      return action.id !== state.id ? state : {
        ...state,
        locked: !state.locked
      };
    case ROLL:
      return state.locked ? state : {
        ...state,
        value: random()
      };
    case RESET:
      return {
        ...state,
        locked: false
      };
    default:
      return state;
  }
}

export default function dices(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOCK:
      return {
        ...state,
        dices: state.dices.map(d => dice(d, action))
      };
    case ROLL:
      return {
        rollCount: state.rollCount + 1,
        dices: state.dices.map(d => dice(d, action))
      };
    case RESET:
      return {
        rollCount: 0,
        dices: state.dices.map(d => dice(d, action))
      };
    default:
      return state;
  }
}

export function toggleLock(id) {
  return {
    type: TOGGLE_LOCK,
    id: id
  };
}

export function roll() {
  return {
    type: ROLL
  };
}

export function reset() {
  return {
    type: RESET
  };
}
