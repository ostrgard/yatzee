import { assert } from 'chai';
import { sum, kind, pair, pairs } from '../src/utils/score';

describe('Score:', () => {
  it('sum returns the sum of an array of numbers', () => {
    assert.equal(sum([3, 1, 5, 6, 4, 1]), 20);
  });

  it('kind returns the sum of x kind', () => {
    assert.equal(kind([3, 1, 5, 5, 5, 5], 5), 20);
    assert.equal(kind([2, 2, 1, 4, 5, 3], 2), 4);
  });

  it('pair returns a pair of twos', () => {
    assert.equal(pair([3, 2, 2, 6, 4, 1], 2), 4);
  });

  it('pair returns a pair of ones', () => {
    assert.equal(pair([3, 1, 2, 6, 4, 1], 2), 2);
  });

  it('pair returns 10 if a 2-pair of 5s exists', () => {
    assert.equal(pair([3, 5, 5, 6, 4, 1], 2, 5), 10);
  });

  it('pair returns the highest 3-pair', () => {
    assert.equal(pair([3, 3, 3, 4, 4, 4], 3), 12);
  });

  it('pair returns 0 if no 3-pair exists', () => {
    assert.equal(pair([3, 2, 3, 6, 4, 4], 3), 0);
  });

  it('pair returns 0 if no 2-pair of 5s', () => {
    assert.equal(pair([3, 5, 6, 6, 4, 1], 2, 5), 0);
  });

  it('pairs returns 14 if there\'s a pair of 3s and 4s', () => {
    assert.equal(pairs([3, 3, 4, 6, 4, 1], 2, 2), 14);
  });

  it('pairs returns 16 if there\'s a pair of 1s, 3s and 4s', () => {
    assert.equal(pairs([3, 3, 4, 1, 4, 1], 2, 3), 16);
  });

  it('pairs returns 21 if there\'s a 3-pair of 2s and 5s', () => {
    assert.equal(pairs([2, 2, 5, 5, 5, 2], 3, 2), 21);
  });

  it('pairs returns 20 if there\'s a pair of 3s and 6s, even though there\'s a pair of 2s as well', () => {
    assert.equal(pairs([6, 2, 4, 6, 4, 2], 2, 2), 20);
  });
});
