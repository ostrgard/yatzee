const TOGGLE_LOCK = 'yatzee/dice/TOGGLE_LOCK';
const ROLL = 'yatzee/dice/ROLL';
const RESET = 'yatzee/dice/RESET';

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

export default function dice(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOCK:
      return {
        ...state,
        dices: state.dices.map(die => {
          return die.id !== action.id ? die : {
            ...die,
            locked: !die.locked
          };
        })
      };
    case ROLL:
      return {
        rollCount: state.rollCount + 1,
        dices: state.dices.map(die => {
          return die.locked ? die : {
            ...die,
            value: random()
          };
        })
      };
    case RESET:
      return {
        rollCount: 0,
        dices: state.dices.map(die => {
          return {
            ...die,
            locked: false
          };
        })
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

