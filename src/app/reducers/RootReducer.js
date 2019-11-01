import { combineReducers } from "redux";
import { reducer as FormReducer} from "redux-form"
import testReducer from "../../features/testArea/TestReducer.js";
import eventReducer from "../../features/events/eventReducer.js";

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
})

export default rootReducer