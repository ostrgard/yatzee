import { assert } from 'chai';
import { sum, kind, pair, pairs, house, straight } from '../src/utils/score';

describe('Score:', () => {
  it('sum returns the sum of an array of numbers', () => {
    assert.equal(sum([3, 1, 5, 6, 4, 1]), 20);
  });

  it('kind returns the sum of x kind', () => {
    assert.deepEqual(kind([3, 1, 5, 5, 5, 5], 5), {score: 20, occurrences: 4});
  });

  it('pair returns a pair of twos', () => {
    assert.deepEqual(pair([3, 2, 2, 6, 4, 1], 2), {score: 4, type: 2});
  });

  it('pair returns a pair of ones', () => {
    assert.deepEqual(pair([3, 1, 2, 6, 4, 1], 2), {score: 2, type: 1});
  });

  it('pair returns 10 if a 2-pair of 5s exists', () => {
    assert.deepEqual(pair([3, 5, 5, 6, 4, 1], 2, 5), {score: 10, type: 5});
  });

  it('pair returns 10 if a 2-pair of 5s exists, even though there\'s more 5s', () => {
    assert.deepEqual(pair([3, 5, 5, 5, 5, 5], 2, 5), {score: 10, type: 5});
  });

  it('pair returns 4 if a 2-pair of 2s exists alongside a 2-pair of 4s, which is passed as notOfType param', () => {
    assert.deepEqual(pair([4, 2, 4, 3, 6, 2], 2, undefined, 4), {score: 4, type: 2});
  });

  it('pair returns the highest 3-pair', () => {
    assert.deepEqual(pair([3, 3, 3, 4, 4, 4], 3), {score: 12, type: 4});
  });

  it('pair returns 0 if no 3-pair exists', () => {
    assert.deepEqual(pair([3, 2, 3, 6, 4, 4], 3), {score: 0, type: undefined});
  });

  it('pair returns 0 if no 2-pair of 5s', () => {
    assert.deepEqual(pair([3, 5, 6, 6, 4, 1], 2, 5), {score: 0, type: 5});
  });

  it('pairs returns 14 if there\'s a pair of 3s and 4s', () => {
    assert.deepEqual(pairs([3, 3, 4, 6, 4, 1], 2, 2), {score: 14, type: [4, 3]});
  });

  it('pairs returns 16 if there\'s a pair of 1s, 3s and 4s', () => {
    assert.deepEqual(pairs([3, 3, 4, 1, 4, 1], 2, 3), {score: 16, type: [4, 3, 1]});
  });

  it('pairs returns 21 if there\'s a 3-pair of 2s and 5s', () => {
    assert.deepEqual(pairs([2, 2, 5, 5, 5, 2], 3, 2), {score: 21, type: [5, 2]});
  });

  it('pairs returns 20 if there\'s a pair of 4s and 6s, even though there\'s a pair of 2s as well', () => {
    assert.deepEqual(pairs([6, 2, 4, 6, 4, 2], 2, 2), {score: 20, type: [6, 4]});
  });

  it('house returns score if there\'s a 2-pair and a 3-pair', () => {
    assert.deepEqual(house([3, 3, 4, 4, 4, 2]), {score: 18, type: [4, 3]});
  });

  it('house uses the highest number for the 3-pair, if there\'s two 3-pairs', () => {
    assert.deepEqual(house([3, 3, 4, 4, 4, 3]), {score: 18, type: [4, 3]});
  });

  it('house returns 0 if there\'s no 2-pair but a 3-pair', () => {
    assert.deepEqual(house([3, 2, 4, 4, 4, 1]), {score: 0, type: undefined});
  });

  it('house returns 0 if there\'s neither a 2-pair or a 3-pair', () => {
    assert.deepEqual(house([3, 2, 4, 6, 5, 1]), {score: 0, type: undefined});
  });

  it('straight returns 21 if there\'s one of each and royal is passed as type', () => {
    assert.equal(straight([3, 5, 4, 6, 2, 1], 'royal'), 21);
  });

  it('straight returns 0 if there\'s not one of each and royal is passed as type', () => {
    assert.equal(straight([3, 5, 4, 6, 2, 1], 'royal'), 21);
  });

  it('straight return 15 on small straight', () => {
    assert.equal(straight([5, 1, 4, 3, 1, 2], 'small'), 15);
  });

  it('straight return 20 on large straight', () => {
    assert.equal(straight([6, 3, 2, 6, 5, 4], 'large'), 20);
  });
});
