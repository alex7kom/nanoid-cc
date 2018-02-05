import React, { Component } from 'nervjs';
import generateExample from '../util/nanoid-example';
import './Example.css';

class Example extends Component {
  render () {
    if (
      this.props.state.alphabet.length < 2
      || this.props.state.size <= 1
    ) {
      return null;
    }

    return (
      <div className="Example">
        <h3>Example of this usage</h3>
        <code className="Example-code"
          dangerouslySetInnerHTML={{
            __html: generateExample(this.props.state)
          }}>
        </code>
      </div>
    );
  }
}

export default Example;
