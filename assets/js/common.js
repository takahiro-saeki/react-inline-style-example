import React, {Component} from 'react';
import {render} from 'react-dom';
import Main from './container/Main';
document.body.style.margin = 0;

render(
  <Main />,
  document.getElementById('app')
)
