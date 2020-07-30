import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('broken test', () => {
  const div = document.createElement('div');
  const correct = true;
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(correct).toBe(false);
});
