import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import StoreProvider from './helpers/StoreProvider';

ReactDOM.render(
<StoreProvider>
    <App /> 
</StoreProvider>,
document.getElementById('root'));

