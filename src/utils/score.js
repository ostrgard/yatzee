export function sum(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

export function kind(arr, ofType) {
  const hits = arr.filter(score => score === ofType);

  return {
    score: sum(arr.filter(score => score === ofType)),
    occurrences: hits.length
  };
}

export function pair(arr, amount, ofType, notOfType) {
  if (ofType) {
    return {
      score: kind(arr, ofType).occurrences >= amount ? ofType * amount : 0,
      type: ofType
    };
  }

  return arr
    .map(n => {
      return {
        score: kind(arr, n).occurrences >= amount ? n * amount : 0,
        type: n
      };
    })
    .filter(n => n.score && (!notOfType || notOfType !== n.type))
    .reduce((prev, cur) => prev.score > cur.score ? prev : cur, {score: 0, type: undefined});
}

export function pairs(arr, amount, ofAmount) {
  return arr
    .map((n, i) => pair(arr, amount, i + 1))
    .filter(n => n.score)
    .filter((n, i, a) => a.length >= ofAmount)
    .reverse()
    .slice(undefined, ofAmount)
    .reduce((prev, cur) => {
      return {
        score: prev.score + cur.score,
        type: prev.type ? prev.type.concat([cur.type]) : [cur.type]
      };
    }, {score: 0, type: undefined});
}

export function house(arr) {
  const pair3 = pair(arr, 3);
  const pair2 = pair(arr, 2, undefined, pair3.type);

  if (!pair3.score || !pair2.score) {
    return {
      score: 0,
      type: undefined
    };
  }

  return {
    score: pair3.score + pair2.score,
    type: [pair3.type, pair2.type]
  };
}

function findAll(arr, all) {
  for (let i = 0; i < all.length; i++) {
    if (!arr.find(n => n === all[i])) { // eslint-disable-line no-loop-func
      return false;
    }
  }

  return true;
}

export function straight(arr, type) {
  if (type === 'royal' && findAll(arr, [1, 2, 3, 4, 5, 6])) {
    return 21;
  }

  if (type === 'small' && findAll(arr, [1, 2, 3, 4, 5])) {
    return 15;
  }

  if (type === 'large' && findAll(arr, [2, 3, 4, 5, 6])) {
    return 20;
  }

  return 0;
}
