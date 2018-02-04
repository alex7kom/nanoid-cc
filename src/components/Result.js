import React, { Component } from 'react';
import formatDuration from '../util/duration';

import './Result.css';

class Form extends Component {
  render () {
    const state = this.props.state;

    if (state.alphabet.length < 2) {
      return null;
    }

    if (state.probability <= 0 || state.probability > 100) {
      return null;
    }

    if (state.size < 2 || state.speed < 1) {
      return null;
    }

    const randomBits = Math.log(state.alphabet.length) / Math.LN2;

    const probability = state.probability / 100;
    const generateForCollision = Math.sqrt(
      2
      * Math.pow(2, randomBits * state.size)
      * Math.log(1 / (1 - probability))
    );

    const speedPerSecond = this.props.state.speed / (60 * 60);
    const duration = Math.floor(generateForCollision / speedPerSecond);

    const timeToCollision = formatDuration(duration);

    return (
      <div className="Result">
        <strong>~{timeToCollision}</strong> of work are needed in order to have
        a&nbsp;{state.probability}% probability of at least one collision.
      </div>
    );
  }
}

export default Form;
