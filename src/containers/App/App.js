import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from 'redux/modules/counter';

const styles = require('./App.scss');

@connect(
  state => ({counter: state.counter}),
  dispatch => bindActionCreators({increment}, dispatch)
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    counter: PropTypes.number,
    increment: PropTypes.func
  };

  render() {
    return (
      <div className={styles.app}>
        <div onClick={this.props.increment}>
          App {this.props.counter}
        </div>
        {this.props.children}
      </div>
    );
  }
}
