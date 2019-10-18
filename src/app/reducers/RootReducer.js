import { combineReducers } from "redux";
import testReducer from "../../features/testArea/TestReducer.js";
import eventReducer from "../../features/events/eventReducer.js";

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducer