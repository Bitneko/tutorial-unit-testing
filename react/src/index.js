import React from 'react';
import ReactDOM from 'react-dom';
import {Gists} from 'Gists/Gists';

import 'normalize.css';
import './styles.scss';

const jsx = (
  <div><Gists /></div>
);

const rootElement = document.getElementById('app');
ReactDOM.render(jsx, rootElement);
