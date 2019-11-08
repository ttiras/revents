import { combineReducers } from "redux";
import { reducer as FormReducer} from "redux-form"
import { reducer as ToastrReducer} from 'react-redux-toastr'
import testReducer from "../../features/testArea/TestReducer.js";
import eventReducer from "../../features/events/eventReducer.js";
import modalReducer from "../../features/modals/modalReducer.js";
import authReducer from "../../features/auth/authReducer.js";
import asyncReducer from "../../features/async/asyncReducer.js";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer
})

export default rootReducer