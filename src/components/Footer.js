import React, { Component } from 'nervjs';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <div>
          <h3>Learn more</h3>
          <ul className="Footer-more-list">
            <li>
              <a href="https://en.wikipedia.org/wiki/Birthday_attack">
                Birthday attack
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier#Collisions">
                UUID#Collisions
              </a>
            </li>
          </ul>
        </div>
        <div className="Footer-credits">
          <p>This calculator is made
            by <a href="https://github.com/Alex7Kom">Alexey Komarov</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
