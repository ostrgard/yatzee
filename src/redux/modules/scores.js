import { calc } from '../utils/score';

const ADD = 'yatzee/scores/add';
const PICK = 'yatzee/scores/pick';

function score(state, action = {}) {
  switch (action.type) {
    case PICK:
      return action.id === state.id ? calc(action.dices, action.what, state) : state;
    default:
      return state;
  }
}

function createScore(name, id) {
  return {
    id: id,
    name: name,
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixs: undefined,
    sum: undefined,
    bonus: undefined,
    onePair: undefined,
    twoPair: undefined,
    threePair: undefined,
    threeOak: undefined,
    fourOak: undefined,
    twoThreeOak: undefined,
    small: undefined,
    large: undefined,
    royal: undefined,
    house: undefined,
    chance: undefined,
    yatzee: undefined,
    yatzeeEyes: undefined
  };
}

const initialState = [
  createScore('John', 0)
];

export default function scores(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [].concat(state, [createScore(action.name)]);
    case PICK:
      return state.map(s => score(s, action));
    default:
      return state;
  }
}

export function pick(id, dices, what) {
  return {
    type: PICK,
    id: id,
    dices: dices,
    what: what
  };
}
