export function sum(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

export function kind(arr, type) {
  return sum(arr.filter(score => score === type));
}

export function pair(arr, amount, type) {
  if (type) {
    return kind(arr, type) / type >= amount ? type * amount : 0;
  }

  return arr
    .map(n => kind(arr, n) / n >= amount ? kind(arr, n) : 0)
    .filter(n => n)
    .reduce((prev, cur) => prev > cur ? prev : cur, 0);
}

export function pairs(arr, amount, ofAmount) {
  return arr
    .map((n, i) => pair(arr, amount, i + 1))
    .filter(n => n)
    .reverse()
    .slice(undefined, ofAmount)
    .reduce((prev, cur) => prev + cur, 0);
}
