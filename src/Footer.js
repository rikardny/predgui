import React, { Component } from 'react';
import logo from './pharmbio_logo.png';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="level">

            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Pharmbio</p>
                <img src={logo} alt="logo"></img>
              </div>
            </div>


            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Created by</p>
                <p className="title">Rikard Nyström</p>
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Styled with</p>
                <img src="https://bulma.io/images/bulma-type.png" alt="bulma" style={{height: 40}}></img>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}
