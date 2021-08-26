// node_modules imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

// my imports
import App from './App';
import GlobalStyling from './components/GlobalStyling/GlobalStyling';
import ColorCopy from './components/ColorCopy/ColorCopy';
import store from './store';


ReactDOM.render(<>
  <GlobalStyling />
    <Provider store={store}>
      <App /> 
    </Provider>
  </>,
  document.getElementById('root')
);

