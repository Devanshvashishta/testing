export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // check to see if the action  has a promise in its 'payload' property
    //if it does than wait for it to resolve
    //if it doesn't then send the action to next middleware
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    //we want to wait for the promise to resolve,
    //get the data create a new action with the data and dispatch it

    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
