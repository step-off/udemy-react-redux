import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers';
import asyncMiddleware from '../middlewares/async';
import stateValidatorMiddleware from '../middlewares/stateValidator';

export default props => {
    const store = createStore(
        reducers, 
        props.initialState || {},
        applyMiddleware(asyncMiddleware, stateValidatorMiddleware)
        );
        
   return <Provider store={store}>
        {props.children} 
    </Provider>
}