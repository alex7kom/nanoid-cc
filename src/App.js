import React, { Component } from 'nervjs';

import Form from './components/Form';
import Result from './components/Result';
import Example from './components/Example';
import Footer from './components/Footer';

import './App.css';

import {
  defaultAlphabet,
  defaultSize
} from './defaults.js';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      alphabet: defaultAlphabet,
      size: defaultSize,
      speed: 1000,
      probability: 1
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue (key, value) {
    this.setState({
      [key]: value
    });
  }

  render () {
    // TODO: INPUT VALIDATION

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <a href="https://github.com/ai/nanoid">Nano ID</a> Collision Calculator
          </h1>
        </header>
        <div className="App-intro">
          <p>
            Nano ID is a unique string ID generator for JavaScript
            and <a href="https://github.com/ai/nanoid#other-programming-languages">
              other languages
            </a>.
          </p>
          <p>
            As any other ID generator Nano ID has a probability of generating
            the same ID twice, i.e. producing a collision.
          </p>
          <p>
            The purpose of this calculator is to find ID length for chosen
            alphabet safe enough to avoid collisions.
          </p>
        </div>
        <Form state={this.state} setValue={this.setValue} />
        <Result state={this.state} />
        <Example state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
