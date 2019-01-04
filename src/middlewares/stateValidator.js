import tv4 from 'tv4';

import stateSchema from '../helpers/stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    const isValid = tv4.validate(getState(), stateSchema);

    if (!isValid) {
        console.error('State schema is invalid!')
    }
}