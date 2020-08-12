import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';


const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(fbConfig)
));

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={ store }>
    <ReactReduxFirebaseProvider { ...rrfProps }>
       <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
