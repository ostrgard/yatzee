import React, { Component } from 'react';
import { Column, Dice, Score } from 'components';
const styles = require('./Board.scss');

export default class Board extends Component {
  render() {
    return (
      <div className={styles.board}>
        <div className={styles.scores}>
          <div className={styles.score}>
            <Column
              rows={[
                'Enere',
                'Toere',
                'Treere',
                'Firere',
                'Femere',
                'Seksere',
                'Sum',
                'Bonus',
                '1 par',
                '2 par',
                '3 par',
                '3 ens',
                '4 ens',
                '2x3 ens',
                'Lille straight 1-2-3-4-5',
                'Stor straight 2-3-4-5-6',
                'Royal 1-2-3-4-5-6',
                'Hus - 3 og 2 ens',
                'Chance',
                'Yatzy - 6 ens',
                'Yatzy øjne'
              ]}
            />
          </div>
          <div className={styles.score}>
            <Score />
          </div>
        </div>
        <div className={styles.dice}>
          <Dice />
        </div>
      </div>
    );
  }
}
