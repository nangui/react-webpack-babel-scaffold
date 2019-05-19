import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

let HelloWorld = () => {
  return <h1>Hello World</h1>
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
