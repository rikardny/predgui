import React, { Component } from 'react';

export class App extends Component {
  getSmiles() {
    let data = document.JME.smiles();
    document.getElementById("output").value = data;
  }

  getJMEstring() {
    let data = document.JME.jmeFile();
    document.getElementById("output").value = data;
  }


  render() {
    return (
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box ">
              <div className="content">
                <div id="jsme_container"></div>
              </div>
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child notification">

              <nav className="level">
                <div className="level-item">
                  <button className="button is-info" onClick={this.getSmiles}>Get smiles</button>
                </div>
                <div className="level-item">
                  <button className="button is-info" onClick={this.getJMEstring}>Get JME string</button>
                </div>
              </nav>

              <div className="content">
                <textarea className="textarea" id="output" placeholder="Smiles go here." rows="10"></textarea>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
