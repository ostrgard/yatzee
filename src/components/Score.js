import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { sum, kind, pair, pairs, house, straight } from '../utils/score';
import { Column } from 'components';

@connect(
  state => ({dices: state.dice.dices}),
  null
)
export default class Dice extends Component {
  static propTypes = {
    dices: PropTypes.array
  };

  render() {
    const dices = this.props.dices.map(d => d.value);

    return (
      <Column
        rows={[
          kind(dices, 1).score, // Enere
          kind(dices, 2).score, // Toere
          kind(dices, 3).score, // Treere
          kind(dices, 4).score, // Firere
          kind(dices, 5).score, // Femere
          kind(dices, 6).score, // Seksere
          '-', // Sum
          '-', // Bonus
          pair(dices, 2).score, // 1 par
          pairs(dices, 2, 2).score, // 2 par
          pairs(dices, 3, 2).score, // 3 par
          pair(dices, 3).score, // 3 ens
          pair(dices, 4).score, // 4 ens
          pairs(dices, 2, 3).score, // 2x3 ens
          straight(dices, 'small'), // Lille straight 1-2-3-4-5
          straight(dices, 'large'), // Stor straight 2-3-4-5-6
          straight(dices, 'royal'), // Royal 1-2-3-4-5-6
          house(dices).score, // Hus - 3 og 2 ens
          sum(dices), // Chance
          pair(dices, 6).score, // Yatzy - 6 ens
          pair(dices, 6).score ? sum(dices) : '-'
        ]}
      />
    );
  }
}
