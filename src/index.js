import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';
import './index.css';

ReactDOM.render(
  <Select
    values={["State.", "Should.", "Be.", "Synchronous."]}
    onSelect={value => console.log(value)}
  />,
  document.getElementById('root')
);
