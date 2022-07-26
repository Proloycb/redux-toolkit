/**
 * state
 * dispatch action
 * reducer
 * store
 */

const {createStore} = require('redux');

// constants
// const INCREMENT = 'INCREMENT';
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// const DECREMENT = 'DECREMENT';
// const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

const initialState = {
    users: ["roh"],
    count: 1,
};

const userCounter = (value) => {
    return {
        type: ADD_USER,
        payload: value,
    };
};
// const incrementCounter = () => {
//     return {
//         type: INCREMENT,
//     };
// };
// const decrementCounter = () => {
//     return {
//         type: DECREMENT,
//     };
// };
// const resetCounter = () => {
//     return {
//         type: RESET,
//     };
// };
// const incrementCounterValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value, 
//     };
// };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // case INCREMENT:
        //   return{
        //     ...state,
        //     count: state.count + 1,
        //   };
        // case DECREMENT:
        //   return{
        //     ...state,
        //     count: state.count - 1,
        //   };
        // case RESET:
        //   return{
        //     ...state,
        //     count: 0,
        //   };
        // case INCREMENT_BY_VALUE:
        //   return{
        //     ...state,
        //     count: state.count + action.payload,
        //   };
        case ADD_USER:
          return{
            users: [...state.users, action.payload],
            count: state.count + 1,
          };
    
        default:
            state;
    }
};

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounterValue(10));
// store.dispatch(incrementCounterValue(6));
store.dispatch(userCounter('jim'));