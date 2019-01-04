export default ({ dispatch }) => next => action => {
    const {payload} = action;

    if (payload && payload instanceof Promise) {
        payload.then(data => {
            const newAction = {...action, payload: data};

            dispatch(newAction);
        }).catch(() => {
            
        })
    } else {
        next(action);
    }
}