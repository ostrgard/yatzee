export function ones(arr) {
  return arr
    .filter(score => score === 1)
    .reduce((ps, cs) => ps + cs);
}
