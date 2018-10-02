import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
 

import './index.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Roboto:200', 'Roboto Condensed:200,300,400,700', 'sans-serif']
  }
});

library.add(
  fab,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
