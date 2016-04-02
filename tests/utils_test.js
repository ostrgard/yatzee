import { assert } from 'chai';
import { ones } from '../src/utils/score';

describe('Score', () => {
  it('Calculating ones given 4 ones results in 4', () => {
    assert.equal(ones([2, 2, 1, 1, 1, 1]), 4);
  });
});
