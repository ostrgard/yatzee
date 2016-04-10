import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { roll, toggleLock, reset } from 'redux/modules/dices';
const styles = require('./Dices.scss');

@connect(
  state => ({dices: state.dices.dices, rollCount: state.dices.rollCount}),
  dispatch => bindActionCreators({roll, toggleLock, reset}, dispatch)
)
export default class Dices extends Component {
  static propTypes = {
    dices: PropTypes.array,
    rollCount: PropTypes.number,
    roll: PropTypes.func,
    toggleLock: PropTypes.func,
    reset: PropTypes.func
  };

  render() {
    const {
      dices,
      rollCount,
      roll, // eslint-disable-line no-shadow
      toggleLock, // eslint-disable-line no-shadow
      reset // eslint-disable-line no-shadow
    } = this.props;

    const lockable = rollCount <= 2 && rollCount > 0;

    return (
      <div>
        {dices.map(die => (
          <div
            className={[
              styles.dice,
              lockable && styles.lockable,
              die.locked && styles.locked
            ].join(' ')}
            key={die.id}
            onClick={lockable && (() => toggleLock(die.id))}
          >
            {die.value}
          </div>
        ))}
        {rollCount <= 2 && <button onClick={roll}>Slå</button>}
        {rollCount > 2 && <button onClick={reset}>Næste runde</button>}
      </div>
    );
  }
}
