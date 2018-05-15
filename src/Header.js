import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Pharmbio JSME project
            </h1>
            <h2 className="subtitle">
              Built w/ React
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
