import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const myLogger = store => next => action => {
  console.log("logger fired...", action);
  console.log("the state of state", store.getState);
  action.payload = 450;
  try {
    next(action);
  } catch (e) {
    console.log("Bugs", e);
  }
};

const middleWare = applyMiddleware(thunk, logger);

//---------------------------------------------
const reducer = function(state, action) {
  console.log("Reducer called...", state, action);
  if (action.type === "INC") {
    return state + action.payload;
  } else if (action.type === "DEC") {
    return state - action.payload;
  } else if (action.type === "ER") {
    throw new Error("Somem..error...");
  }

  return state;
};

const store = createStore(reducer, 0, middleWare);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "INC", payload: 1 });

store.dispatch({ type: "ER", payload: 1 });
