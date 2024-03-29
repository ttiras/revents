import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstant.js";
import { asyncActionFinish } from "../async/asyncActions.js";
import { ASYNC_ACTION_START } from "../async/asyncConstants.js";

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    
    }
}

const delay = (ms) => {
    return new Promise(resolve=> (setTimeout(resolve,ms)))
}

export const asyncIncrement = (name) => {
    return async dispatch => {
        dispatch({type: ASYNC_ACTION_START, payload: name})
        await delay(1000)
        dispatch(incrementCounter())
        dispatch(asyncActionFinish())
    }
}

export const asyncDecrement = (name) => {
    return async dispatch => {
        dispatch({type: ASYNC_ACTION_START, payload: name})
        await delay(1000)
        dispatch({type: DECREMENT_COUNTER})
        dispatch(asyncActionFinish())
    }
}