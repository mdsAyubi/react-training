import { combineReducers, createStore } from "redux";

const userReducers = (state = {}, action) => {
  console.log("User reducer fired");
  switch (action.type) {
    case "CHANGE_NAME": {
      state = { ...state, name: action.payload };
      break;
    }
    case "CHANGE_AGE": {
      state = { ...state, age: action.payload };
      break;
    }
  }
  return state;
};

const tweetReducer = (state = {}, action) => {
  console.log("Tweets reducer fired...");
  return state;
};

const reducers = combineReducers({ users: userReducers, tweets: tweetReducer });

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store changes", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "sachin" });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });

//You application state can be this : {}
