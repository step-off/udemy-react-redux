import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import StoreProvider from './helpers/StoreProvider';

ReactDOM.render(
<StoreProvider>
    <BrowserRouter>
        <Route path='/' component={App} /> 
    </BrowserRouter>
</StoreProvider>,
document.getElementById('root'));

