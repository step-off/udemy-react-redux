import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers';
import asyncMiddleware from '../middlewares/async';

export default props => {
    const store = createStore(
        reducers, 
        props.initialState || {},
        applyMiddleware(asyncMiddleware)
        );
        
   return <Provider store={store}>
        {props.children} 
    </Provider>
}