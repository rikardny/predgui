import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Header } from './Header';
import { Footer } from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

registerServiceWorker();
