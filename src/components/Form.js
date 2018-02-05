import React, { Component } from 'nervjs';
import './Form.css';

class Form extends Component {
  render () {
    return (
      <div className="Form">
        <label htmlFor="Form-alphabet" className="Form-label">
          Alphabet: <br />
          <textarea className="Form-input Form-alphabet" id="Form-alphabet" type="text"
            value={this.props.state.alphabet}
            onChange={(e) => this.props.setValue('alphabet', e.target.value)}>
          </textarea>
        </label>
        <div className="Form-error">
          {
            this.props.state.alphabet.length < 2
              && 'The length of the alphabet should be 2 or more'
          }
          {
            this.props.state.alphabet.length > 256
              && 'The length of more than 256 symbols is not secure due to algorithm limitations'
          }
        </div>
        <label htmlFor="Form-size" className="Form-label">
          The length of ID:
          <input className="Form-input Form-size" id="Form-size" type="text"
            value={this.props.state.size}
            onChange={
              (e) => this.props.setValue('size', Number(e.target.value))
            } /> symbols
        </label>
        <div className="Form-error">
          {
            this.props.state.size < 2
              && 'The length of the ID should be 2 or more'
          }
        </div>
        <label htmlFor="Form-speed" className="Form-label">
          The speed of ID generation:
          <input className="Form-input Form-speed" id="Form-speed" type="text"
            value={this.props.state.speed}
            onChange={
              (e) => this.props.setValue('speed', Number(e.target.value))
            } /> IDs per hour
        </label>
        <div className="Form-error">
          {
            this.props.state.speed < 1
              && 'The length of the ID should be 1 or more'
          }
        </div>
        {/*<label htmlFor="Form-probability" className="Form-label">
          Probability of collision: <br />
          <input className="Form-input" id="Form-probability" type="text"
            value={this.props.state.probability}
            onChange={
              (e) => this.props.setValue('probability', Number(e.target.value))
            } /> %
          </label>*/}
      </div>
    );
  }
}

export default Form;
